<?php

    session_start();
    // Remover indices do array de sessão
    // unset() 
    // Ex: unset($_SESSION['autenticado']);

    // Destruir a variavel de sessão
    // session_destroy()

    session_destroy();
    header('Location: index.php');
?>