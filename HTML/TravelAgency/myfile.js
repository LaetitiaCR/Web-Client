function valideName() {
    if (document.formSaisie.nameNom.value == "") {

        //alert("Saisissez votre Nom");

        var newSpan1 = document.createElement('span');
        newSpan1.id = 'spanPoint';
        newSpan1.setAttribute('style', "color:red");
        document.getElementById('idLblNom').appendChild(newSpan1);
        var  newText1 =  document.createTextNode('*');
        newSpan1.appendChild(newText1); 

        document.getElementById('name').focus();
    }
}

function  valideMail()  {    
    if  (document.formSaisie.nameMail.value  ==  "")  {

        //alert("Saisissez votre Mail");
        var  newSpan2  =  document.createElement('span');        
        newSpan2.id  =  'spanPoint';        
        document.getElementById('idLblMail').appendChild(newSpan2);        
        newSpan2.setAttribute('style',  "color:red");        
        document.getElementById('idLblMail').appendChild(newSpan2);        
        var   newText2  =   document.createTextNode('*');        
        newSpan2.appendChild(newText2); 


        document.getElementById('email').focus();

    } else {

        var mailSaisi = document.formSaisie.nameMail.value;

        for  (var  j  =  1;  j  <  mailSaisi.length;  j++)  {
            if  (mailSaisi.charAt(j)  ==  '@')  {
                var caractereArobase = true;
                break;
            }
        }

        if (!caractereArobase) {
            document.formSaisie.nameMail.value = "";
            alert("Entrez un mail valide !")
            document.getElementById('email').focus();
        }
        if (caractereArobase == true && document.formSaisie.nameNom.value != "") {
            valideEntrer();
        }


    }
}


function  valideEntrer()  {

    alert("ok");


    var titre3 = document.querySelector('h3');
    //titre3.replaceWith.('h1');
    titre3.innerHTML = "Vos coordonnées ont été pris en compte. <br> Nous vous contacterons dès que possible ! ";
    titre3.style.fontSize = "12px";

}


function ajaxAjouterUtilisateur() {
    //alert('ok');


    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        alert("xhr est un " + xhr);

    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
        alert("xhr est un " + xhr);
    } else {
        alert("Votre navigateur n'est pas compatible avec AJAX...");
        xhr = null;
    }
    //return xhr;




    //var xhr = getXMLHTTP();

    if (xhr == null) {
        alert("Votre navigateur est inconnu et ne supporte pas les objets XMLHTTPRequest...");
    } else {

        // var formData = new FormData();
        //var formElement = document.getElementById("myFormElement");
        // formData = new FormData(formElement);

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        //formData.append("name", name);
        //formData.append("email", email);

        name = encodeURIComponent(name);
        email = encodeURIComponent(email);
        //var paramsEncode = "name=" + encodeURICompenent(name) +
        //   "&email=" + encodeURICompenent(email);
        //xhr.open('POST', 'essai.php', true);

        //alert(pnom + pmail);
        //var data = "p1nom=" + pnom + "p2mail=" + pmail;
        donnees = "donneeName=" + name + "&donneesMail=" + email;
        //xhr.open('POST', 'ajoutClient.php', true);
        xhr.open('POST', 'ajoutAjax.php', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded");

        //alert(name + email);
        xhr.onreadystatechange = function() {
            //if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
                alert("oh pret a recevoir " + xhr.responseText); // C'est ok \o/    
            } else {
                alert("ERROR ERROR, le serveur n'est pas prêt : " + xhr.status);
            }
        };


        xhr.send(donnees);
        //xhr.send('p1nom=' + p1nom + '&p2mail=' + p2mail);
        //xhr.open("GET", "handlingData.php", true);
        //xhr.send(paramsEncode);
        //xhr.send(formData);
        //xhr.send('param1=' + value1 + '&param2=' + value2);
        // xhr.send('p1nom=' + pnom + '&p2mail=' + pmail);
        //xhr.send(data);
    }
}