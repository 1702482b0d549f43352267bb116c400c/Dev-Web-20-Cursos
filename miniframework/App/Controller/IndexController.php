<?php

    namespace App\Controller;

    class IndexController {

        private $view;

        public function __construct() {
            $this->view = new \stdClass();
        }
         
        public function index() {
            $this->view->dados = array('uahsua','ahsuhusa');
            $this->render('index');
        }

        public function sobreNos() {
            $this->render('sobreNos');
        }

        public function render($view){
            $classeAtual = get_class($this);
            $classeAtual = str_replace('App\\Controller\\','', $classeAtual);
            $classeAtual = strtolower(str_replace('Controller','', $classeAtual));
            require_once "../App/View/".$classeAtual."/".$view.".phtml";
        }
    }
    
?>