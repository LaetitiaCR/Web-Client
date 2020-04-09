<?php
 //header('Access-Control-Allow-Origin: index.html');
 //header('Access-Control-Allow-Credentials: true');

try
{

    $dsn = 'mysql:dbname=mybasedd;host=127.0.0.1;port=3308;charset=utf8';
 
   // $dsn = 'mysql:host=localhost;dbname=mybasedd';
    $user = 'root';
    $password = '';
   

    $bdd = new PDO($dsn, $user, $password);
  
    
    if(isset($_POST['nameNom']) && isset($_POST['nameMail'])){

        $slqPdoBind='SELECT * FROM clients where login = :login and mail = :mail';
       
        //$resultat=$req->fetch();
        $reponse = $bdd->prepare($slqPdoBind);
        //$sth->bindParam(':calories', $calories, PDO::PARAM_INT);
        //$sth->bindParam(':couleur', $couleur, PDO::PARAM_STR, 12);
        //echo $_POST['nameNom'];
        $reponse->bindValue(':login', $_POST['nameNom']);
        $reponse->bindValue(':mail', $_POST['nameMail']);
        //$q->bindValue(':contacter', $contacter);
        $reponse->execute();
        $count = $reponse->rowCount();
        //$total = $reponse->rowCount();
        //$result = $reponse->fetchAll();

        if ($count > 0){

            $slqPdoBind = "UPDATE clients SET contacter = :contacter WHERE mail = :mail";
            $aContacter = "O";
            
            $q = $bdd->prepare($slqPdoBind);
            //$q->bindValue(':login', $_POST['nameNom']);
            $q->bindValue(':mail', $_POST['nameMail']);
            $q->bindValue(':contacter', $aContacter);
           
        
            $q->execute();
   
        }
        else{
            
            echo "pas de resultat pour cette requête";
            echo $_POST['nameNom'];
            $slqPdoBind = "INSERT INTO clients (login, mail, contacter) VALUES (:login, :mail, :contacter)";
            $aContacter = "N";
            //$q = $this->_bdd->prepare('INSERT INTO personnages(id, nom, degats) VALUES(:id, :nom, :degats)');

            $q = $bdd->prepare($slqPdoBind);
            $q->bindValue(':login', $_POST['nameNom']);
            $q->bindValue(':mail', $_POST['nameMail']);
            $q->bindValue(':contacter', $aContacter);
           
          

            $q->execute();

            echo "La requete a été insérée";
        
        }
   
    }
    else{
        echo "le formulaire n'a pas été rempli correctement";
    }
    

    echo "connection à la base de données réussie";


   
}

catch (Exception $e)
{
    //die('Erreur : ' . $e->getMessage());
    echo "une erreur s'est produite en relation avec la base de données";  
}

?>