function boiteDialogueBonjour() {
    alert('Hello!');
}

function changeLink() {
    var linkSite = document.getElementById('myLinkSite');
    var href = linkSite.getAttribute('href'); // On récupère l'attribut « href »
    //alert(href);
    linkSite.setAttribute('href', 'https://www.google.fr/');

    document.getElementById('myLinkSite').innerHTML = 'lien google';
}

function changeImg1() {
    var img = document.getElementById('myImg');
    var src = img.getAttribute('src'); // On récupère l'attribut « href »
    //alert(href);
    img.setAttribute('src', 'images/crmMulhouse.jpg');
}

function changeImg2() {
    var img = document.getElementById('myImg');
    var src = img.getAttribute('src'); // On récupère l'attribut « href »
    //alert(href);
    img.setAttribute('src', 'images/logoCRM.png');
}