<?php
    require_once '../vendor/autoload.php';

    echo 'Funcionando';
    $route = new \App\Route;

    echo '<hr>';
    print_r($route->getRoutes());

?>