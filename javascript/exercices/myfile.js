function afficheSurface() {
    var longueurEtLargeur = prompt('Entrer un longueur et une largeur:');
    var chiffres = longueurEtLargeur.split(' ');
    var longueur = chiffres[0];
    var largeur = chiffres[1];
    var surface = parseInt(longueur) * parseInt(largeur);
    alert('la surface est : ' + surface);
    changeBoutonFonction();
}

function changeBoutonFonction() {
    var boutF = document.getElementById('boutFonct');
    boutF.setAttribute('onclick', 'affichePerimetre();');
    boutF.setAttribute('value', 'Mon bouton affiche fonction perimetre');
}

function affichePerimetre() {
    var longueurEtLargeur = prompt('Entrer un longueur et une largeur:');
    var chiffres = longueurEtLargeur.split(' ');
    var longueur = chiffres[0];
    var largeur = chiffres[1];
    var perimetre = (parseInt(longueur) + parseInt(largeur)) * 2;
    alert('le perimetre est : ' + perimetre);
}

function retourValeurCercle() {
    var rayon = prompt('Entrer un rayon :');
    var surfaceCercle = Math.PI * (parseInt(rayon) * parseInt(rayon));
    //alert('la surface est : ' + surfaceCercle);
    document.getElementById('retourValeur').innerHTML = "La surface du cercle est : " + surfaceCercle;
}

function afficheFonctionSansParam() {
    document.getElementById('retourValeurFonctionSansParam').innerHTML = "fonction sans paramètre";
}


function afficheFonctionAvecUnParam(param1) {
    document.getElementById('retourValeurFonctionAvecUnParam').innerHTML = "fonction avec un paramètre : " + param1;
}

function afficheFonctionAvecDeuxParam(param1, param2) {
    document.getElementById('retourValeurFonctionAvecDeuxParam').innerHTML = "fonction avec deux paramètre : " + param1 + " et " + param2;
}



function additionne() {
    var tab = [-2, 1, 4];
    var nb = prompt("Entrer un nombre entre 1 et 3");
    affiche((parseInt(nb)), tab);
}

function affiche(paramNb, paramTab) {
    var somme = 0;
    for (var i = 0; i < paramNb; i++) {
        cellule = i + 1;
        alert('La cellule ' + cellule + ' du tableau est  ' + paramTab[i]);
        somme = somme + paramTab[i];
    }
    alert('La somme des cellules du tableau est :' + somme);
}

function boucle1() {
    var tab = [0, 1, 4, 9, 16];
    var cellules = "";
    for (var i = 0; i < tab.length; i++) {
        //cel = ' + paramTab[i] + ';
        // cellules = cellules + " " + cel ;
        cellules = cellules + ' ' + tab[i];
    }
    alert(' Le tableau est : ' + cellules)
}

function boucle2() {
    var tab = [0, 1, 4, 9, 16];
    var cellules = "";
    var nb = prompt("Entrer un nombre entre 1 et 5");
    for (var i = 0; i < nb; i++) {
        cellules = cellules + " " + tab[i];
    }
    alert('Les ' + nb + ' premières cellules du tableau sont : ' + cellules)
}



// divMouseMouve.setAttribute('onMouseOver', "changeCouleur();")



function changeColorPRouge() {
    var pMouseMouve = document.getElementById("p1");
    pMouseMouve.setAttribute('style', 'color:red');
}

function changeColorPJaune() {
    var pMouseMouve = document.getElementById("p1");
    pMouseMouve.setAttribute('style', 'color:yellow');
}

function changeColorPBleu() {
    var pMouseMouve = document.getElementById("p1");
    pMouseMouve.setAttribute('style', 'color:blue');
}

function changeCouleur(strCouleur) {

}





var newLink = document.createElement('a');
newLink.id = 'sdz_link';
newLink.href = 'http://blog.crdp-versailles.fr/rimbaud/';
newLink.title = 'Découvrez le blog de la Classe Actu !';
newLink.setAttribute('tabindex', '10');
document.getElementById('myP').appendChild(newLink);
// le nouvel élément est le dernier enfant 
// dans le paragraphe avec id 'myP'
var newLinkText = document.createTextNode(" Le Tonnerre de Rimbaud");
newLink.appendChild(newLinkText);
// ces deux lignes pour ajouter le texte

var link = document.getElementsByTagName('a')[0];
var newLabel = document.createTextNode('et un hyperlien');
link.replaceChild(newLabel, link.firstChild);


newLink.setAttribute('tabindex', '10');
document.getElementById('myP').appendChild(newLink); // le nouvel élément
//est le dernier enfant dans le paragraphe avec id 'myP'
var newLinkText = document.createTextNode(" Bis Le Tonnerre de Rimbaud");
newLink.appendChild(newLinkText); // ces deux lignes pour ajouter le texte







var newDiv = document.createElement('div');
newDiv.id = 'divTpUn';
document.getElementById('divTp1').appendChild(newDiv);

var newDivTextUn = document.createTextNode("Le");
newDiv.appendChild(newDivTextUn);

var newBaliseStrongUn = document.createElement('strong');
var newDivTextDeux = document.createTextNode("World Wide Web Consortium");
newDiv.appendChild(newBaliseStrongUn).appendChild(newDivTextDeux);

var newDivTextTrois = document.createTextNode(', abrégé par le sigle ');
newDiv.appendChild(newDivTextTrois);

var newBaliseStrongDeux = document.createElement('strong');
var newDivTextQuatre = document.createTextNode('W3C');
newDiv.appendChild(newBaliseStrongDeux).appendChild(newDivTextQuatre);



var  newLinkUnA  =  document.createElement('a');
newLinkUnA.href  =  'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
newLinkUnA.title  =  'Organisme de normalisation';
document.getElementById('divTp1').appendChild(newLinkUnA);
var  newLinkTextUn  =  document.createTextNode('organisme de standardisation');
newLinkUnA.appendChild(newLinkTextUn);  // ces deux lignes pour ajouter le texte

var  newDivTextDeux  =  document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du ');
document.getElementById('divTp1').appendChild(newDivTextDeux);  // ces deux lignes pour ajouter le texte


var  newLinkDeux  =  document.createElement('a');
newLinkDeux.href  =  'http://fr.wikipedia.org/wiki/World_Wide_Web';
newLinkDeux.title  =  'World Wide Web';
document.getElementById('divTp1').appendChild(newLinkDeux);
var  newLinkTextDeux  =  document.createTextNode('World Wide Web');
newLinkDeux.appendChild(newLinkTextDeux);








var newDiv = document.createElement('div');
newDiv.id = 'divTpDeux';
document.getElementById('divTp2').appendChild(newDiv);


var  newDeuxP  =  document.createElement('p');
newDeuxP.id = 'divTpDeux';
newDiv.appendChild(newDeuxP);
var  newTextDeux  =  document.createTextNode('Langages basés sur ECMAScript :');
newDeuxP.appendChild(newTextDeux); 

var  newUl  =  document.createElement('ul');
newUl.id  =  "ulDeux"
newDeuxP.appendChild(newUl);

var  newLi;
var newLiXText;
for  (var  i  =  0;  i  <  4;  i++)  {
    newLi =  document.createElement('li');

    newDeuxP.appendChild(newLi);

    if  (i  ==  0)  {        
        newLiXText   =   document.createTextNode('JavaScript');
    } 
    else  if  (i  ==  1)  {        
        newLiXText   =   document.createTextNode('JScript');
    } 
    else  if  (i  ==  2)  {        
        newLiXText   =   document.createTextNode('ActionScript');
    } 
    else  {        
        newLiXText   =   document.createTextNode('EX4');
    }

    newLi.appendChild(newLiXText);
    //newLi.innerHTML = 'un huj';
    //newDeuxP.appendChild(newLi);
}