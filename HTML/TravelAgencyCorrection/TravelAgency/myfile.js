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