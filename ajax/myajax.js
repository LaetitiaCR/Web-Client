function ajaxAjoutClient(nom, mail) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            //var value1 = encodeURIComponent(value1),
            //value2 = encodeURIComponent(value2);

            xhr.open('POST', 'ajoutClient.php');
            xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
            xhr.send();
            // xhr.send('paramNom=' + nom + '&paramMail=' + name);
            // xhr.send('param1=' + value1 + '&param2=' + value2);
            var reponse = xhr.responseText;
        }
    }

    return reponse;

}


function essaiAjax() {
    var xhr = new XMLHttpRequest();


    xhr.open('POST', 'essai.php', true);


    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            alert(xhr.responseText);
            //var value1 = encodeURIComponent(value1),
            //value2 = encodeURIComponent(value2);
        }
    };


    xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
    xhr.send(null);
}

function ajax() {
    var xhr = getXMLHttpRequest();
    xhr.open('POST', 'essai.php', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            //&& (xhr.status == 200 || xhr.status == 0)) {
            alert(xhr.responseText); // C'est ok \o/    
        } else {
            alert('pas ok');
        }
    };
    //xhr.open("GET", "handlingData.php", true);
    xhr.send(null);
}

function ajaxBis() {
    xhr_object = new XMLHttpRequest();

    //xhr_object.open("GET", "foo.txt", true); 

    xhr_object.open('POST', 'essai.php', true);

    xhr_object.onreadystatechange = function() {
        if (xhr_object.readyState == 4) alert(xhr_object.responseText);
    }

    xhr_object.send(null);
}