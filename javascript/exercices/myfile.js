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
    boutF.setAttribute('value', 'Mon bouton affiche fonction perimetre')
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