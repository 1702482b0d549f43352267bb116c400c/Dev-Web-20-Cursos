<?php

    session_start();

    // Criando arquivo que irá conter o chamado
    $arquivo = fopen('arquivo.hd','a');

    // Montando o texto
    $titulo = str_replace('#', '-', $_POST['titulo']);
    $categoria = str_replace('#','-', $_POST['categoria']);
    $descricao = str_replace('#', '-', $_POST['descricao']);

    $texto = $_SESSION['id'] . '#' . $titulo . '#' . $categoria . '#' . $descricao . PHP_EOL;

    // Escrevendo no arquivo
    fwrite($arquivo, $texto);

    // Fechando o arquivo
    fclose($arquivo);

    header('Location: abrir_chamado.php');
?>