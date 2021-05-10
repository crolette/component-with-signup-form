const inputs = document.getElementsByTagName("input");

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const form = document.getElementsByName("form")[0];


/* Regular expressions pour les vérifications une fois que le formulaire est envoyé */
const regexName =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexPwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
const regexMail = /(\w\.?)+@[\w\.-]+\.\w{2,}/;


// Ajout eventlistener sur chaque champ input sauf le submit
for (let index = 0; index < inputs.length-1; index++) {
    const input = inputs[index];

    input.addEventListener('keyup', function(e) {        
        validInput(input);
    })
}

/* fonction qui active ou désactive l'erreur si le champ est :invalid */
function validInput(field) {  
    if (!field.validity.valid || field.value === ""){
        field.nextElementSibling.classList.add("active");
        field.nextElementSibling.innerText = `Enter a valid ${field.placeholder}`;
    } else {
        field.nextElementSibling.classList.remove("active");
        field.classList.remove("error");
    }
}

/* Fonction qui ajoute l'erreur si le champ ne répond pas à un critère défini*/
function addError(field, text){
    field.nextElementSibling.innerText = text;
    field.nextElementSibling.classList.add("active");
    field.classList.add("error");
}


/* Fonction qui vérifie si, lors de l'envoi du formulaire, un champ est vide ou non */
function emptyField(field){
    if(field.value === ""){
        addError(field, "Field cannot be empty.");
        return 1;
    }
    return 0;
}



function validInputText(field) {
    
    if (emptyField(field) === 1) {
        return 1;
    } else if (field.value.match(regexName) === null) {
        addError(field, "Field must only contain letters")
        return 1;
    } else {
        return 0;
    }
    
}



function validInputMail(field) {

    if (emptyField(field) === 1) {
        return 1;
    } else if (field.value.match(regexMail) === null) {
        addError(field, "Enter a valid e-mail address")
        return 1;
    } else {
        return 0;
    }

}



function validInputPassword(field) {

    if (emptyField(field) === 1) {
        return 1;
    } else if (field.value.match(regexPwd) === null) {
        addError(field, "The password must contain at least 8 characters (one uppercase, one number and one special characters")
        return 1;
    } else {
        return 0;
    }

}



form.addEventListener('submit', function(e){
    let errors = 0;
    errors = validInputText(firstName);
    errors += validInputText(lastName);
    errors += validInputMail(email);
    errors += validInputPassword(password);

    if(errors > 0) {
        e.preventDefault();   
    }

})
