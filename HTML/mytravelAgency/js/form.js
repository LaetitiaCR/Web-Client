function checkInputName(valName) {
    var email = document.getElementById("email").value;
    var nom = valName;

    checkValidForm(nom, email);
}

function checkInputEmail(valName) {
    var email = valName;
    var nom = document.getElementById("name").value;

    checkValidForm(nom, email);
}

function validForm() {
    var email = document.getElementById("email").value;
    if (email.indexOf('@') != -1) {

        document.getElementById("contact-us").innerHTML = "Déjà contacté";
        document.getElementById("contact-us").className = "form-done";
        document.getElementById("name").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("button-ok").disabled = true;
        //var mail = document.getElementById("email").value;
        //var nom = document.getElementById("name").value;
        //rep = ajaxAjoutClient(nom, mail);

        essaiAjax();


        /*
                var xhr = getXMLHttpRequest();

                xhr.onreadystatechange = function() {
        	        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        		        alert("OK"); // C'est bon \o/
        	        }
                };

                xhr.open("GET", "handlingData.php", true);
                xhr.send(null);
        */

        /*
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'ajoutClient.php', true);


        xhr.onreadystatechange = function() {
            if (xhr.readyState == xhr.DONE) {
                alert(xhr.responseText);
                //var value1 = encodeURIComponent(value1),
                //value2 = encodeURIComponent(value2);
            }
        };
        

        xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
        xhr.send(null);
        //xhr.send('paramNom=' + nom + '&paramMail=' + name);
        // xhr.send('param1=' + value1 + '&param2=' + value2);
        //var reponse = xhr.responseText;

        */

        /*
                if (rep == 'ok') {
                    alert("Votre demande a bien été prise en compte, vous serez contacté très prochainement");
                } else {
                    alert("une esrreur s'est produite");
                }
        */

    } else {
        alert("Le format de l'adresse mail n'est pas correcte");
    }
    resetForm();
}

function resetForm() {
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
}

function checkValidForm(nom, email) {
    if (nom != "" && email != "") {
        document.getElementById("button-ok").disabled = false;
    } else {
        document.getElementById("button-ok").disabled = true;
    }
}


function ajaxAjoutClient(nom, mail) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == xhr.DONE) {
            //var value1 = encodeURIComponent(value1),
            //value2 = encodeURIComponent(value2);

            xhr.open('POST', 'ajoutClient.php');
            xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
            //xhr.send();
            xhr.send(data);
            //xhr.send('paramNom=' + nom + '&paramMail=' + name);
            //xhr.send('param1=' + value1 + '&param2=' + value2);
            var reponse = xhr.responseText;
        }
    }

    return reponse;

}


function essaiAjax() {
    var xhr = new XMLHttpRequest();


    xhr.open('POST', 'essai.php', true);


    xhr.onreadystatechange = function() {
        if (xhr.readyState == xhr.DONE) {
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