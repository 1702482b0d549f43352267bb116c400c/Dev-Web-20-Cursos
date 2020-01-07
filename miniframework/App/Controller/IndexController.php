<?php

    namespace App\Controller;

    use MF\Controller\Action;

    class IndexController extends Action {
         
        public function index() {
            $this->view->dados = array('uahsua','ahsuhusa');
            $this->render('index','layout1');
        }

        public function sobreNos() {
            $this->render('sobreNos','layout2');
        }

    }
    
?>