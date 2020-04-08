<?php

try
{

    $dsn = 'mysql:dbname=clients;host=127.0.0.1;port=3308;charset=utf8';
 
    $user = 'Laetitia';
    $password = 'admin';
    $bdd = new PDO($dsn, $user, $password);

    $reponse = $bdd->query('SELECT * FROM administrateurs');

    if($reponse){

   
        $reponse = $bdd->query('SELECT * FROM informations');
 

        while ($donnees = $reponse->fetch())
        {
            echo $donnees['nom'] . '<br />';
            echo $donnees['mail'] . '<br />';
            echo $donnees['contacter'] . '<br />';
        }

    }

}

catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}


?>