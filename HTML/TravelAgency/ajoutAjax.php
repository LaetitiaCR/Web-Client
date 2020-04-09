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
    $var1nom = $_POST[donneeName];
    $var2mail="kio@jik.fr";
    // $myarray = &$_POST ; 
    //$var1nom=$myarray["p1nom"];
    //$var2mail=$myarray["p2mail"];
    //$var1nom=$_POST['name'];
    //$var2mail=$_POST['email'];
    
    //if(isset($_POST['p1nom']) && isset($_POST['p2mail'])){
    //if(isset($_POST['pnom1']) && isset($_POST['pmail2'])){
    if (!empty($var1nom) && !empty(var2mail)){
        //$reponse = $bdd->query('SELECT * FROM informations where name ='.$_POST['pseudo']. ' and mail='.$_POST['email']);
        //$reponse = $bdd->query('SELECT * FROM clients  where login ='.$_POST['nameNom']. ' and mail='.$_POST['nameMail']);
        
        //$reponse = $bdd->query('SELECT * FROM clients  where login ='.$_POST['pnom1']. ' and mail='.$_POST['pmail2']);
        //$param1nom = $_POST['p1nom'];
        //$param2mail = $_POST['p2mail'];
        //$reponse = $bdd->query('SELECT * FROM clients  where login ='.$param1nom. ' and mail='.$param2mail);
        $reponse = $bdd->query('SELECT * FROM clients  where login ='.$var1nom. ' and mail='.$var2mail);

        if($reponse){

            echo "résultats trouver pour cete requête";
   
        }
        else{
            echo "pas de resultat pour cette requête";
            $sqlPdoBind = "INSERT INTO clients (login, mail, contacter) VALUES (:login, :mail, :contacter)";
            $contacter = "N";
            //$q = $this->_bdd->prepare('INSERT INTO personnages(id, nom, degats) VALUES(:id, :nom, :degats)');

            $q = $bdd->prepare(slqPdoBind);
            $q->bindValue(':login', $var1nom);
            $q->bindValue(':mail', $var2mail);
            $q->bindValue(':contacter', $contacter);
           
          

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