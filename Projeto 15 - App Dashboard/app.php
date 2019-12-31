<?php

    class Dashboard {

        public $data_inicio;
        public $data_fim;
        public $numeroVendas;
        public $totalVendas;

        public function __get($atributo) {
            return $this->$atributo;
        }

        public function __set($atributo, $valor) {
            $this->$atributo = $valor;
            return $this;
        }
    }

    class Conexao {

        private $host = 'localhost';
        private $dbname = 'dashboard';
        private $user = 'root';
        private $pass = '';

        public function conectar() {

            try {

                $conexao = new PDO(
                    "mysql:host=$this->host;dbname=$this->dbname",
                    "$this->user",
                    "$this->pass"
                );

                $conexao->exec('set charset set utf8');

                return $conexao;

            } catch (PDOException $e) {
                echo $e->getMessage();
            }
        }

    }

    class Bd {

        private $conexao;
        private $dashboard;

        public function __construct(Conexao $conexao, Dashboard $dashboard) {
            $this->conexao = $conexao->conectar();
            $this->dashboard = $dashboard;
        }

        public function getNumeroVendas() {
            $query = '
                SELECT 
                    COUNT(*) AS numero_vendas
                FROM
                    tb_vendas
                WHERE
                    data_venda BETWEEN :data_inicio AND :data_fim
            ';

            $stmt = $this->conexao->prepare($query);
            $stmt->bindValue(':data_inicio',$this->dashboard->__get('data_inicio'));
            $stmt->execute(':data_fim',$this->dashboard->__get('data_fim'));

            return $stmt->fetch(PDO::FETCH_OBJ);
        }

        public function getTotalVendas() {
            $query = '
                SELECT 
                    SUM(total) AS total_vendas
                FROM
                    tb_vendas
                WHERE
                    data_venda BETWEEN :data_inicio AND :data_fim
            ';

            $stmt = $this->conexao->prepare($query);
            $stmt->bindValue(':data_inicio',$this->dashboard->__get('data_inicio'));
            $stmt->execute(':data_fim',$this->dashboard->__get('data_fim'));

            return $stmt->fetch(PDO::FETCH_OBJ);
        }

    }

    $dashboard = new Dashboard();
    $conexao = new Conexao();

    $competencia = explode('-', $_GET['competencia']);
    $ano = $competencia[0];
    $mes = $competencia[1];
    $dias_do_mes = cal_days_in_month(CAL_GREGORIAN, $mes, $ano);

    $dashboard->__set('data_fim',$ano.'-'.$mes.'-01');
    $dashboard->__set('data_fim',$ano.'-'.$mes.'-'.$dias_do_mes);

    $bd = new Bd($conexao, $dashboard);

    $dashboard->__set('numeroVendas', $bd->getNumeroVendas());
    $dashboard->__set('totalVendas', $bd->getTotalVendas());
    echo json_encode($dashboard);
?>