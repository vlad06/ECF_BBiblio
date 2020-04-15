// Code pour la validation du mot de passe que le jury ou auteur/éditeur doit définir
// lorsqu'il fait sa première connexion
var myPassword = document.getElementById("password");
var minuscule = document.getElementById("minuscule");
var majuscule = document.getElementById("majuscule");
var nombre = document.getElementById("nombre");
var longueur = document.getElementById("longueur");
var btnReset = document.querySelector("button[type=reset]");

// Si l'utilisateur clic sur le bouton reset
btnReset.addEventListener("click", function() {
  minuscule.classList.remove("valid");
  minuscule.classList.add("invalid");
  majuscule.classList.remove("valid");
  majuscule.classList.add("invalid");
  nombre.classList.remove("valid");
  nombre.classList.add("invalid");
  longueur.classList.remove("valid");
  longueur.classList.add("invalid");
});

// Dès que l'utilisateur commence à saisir qqch dans le champ password
myPassword.onkeyup = function() {
    // Validation des lettres minuscules
    var lowerCaseLetters = /[a-z]/g;
    if(myPassword.value.match(lowerCaseLetters)) {  
      minuscule.classList.remove("invalid");
      minuscule.classList.add("valid");
    } else {
      minuscule.classList.remove("valid");
      minuscule.classList.add("invalid");
    }
    
    // Validation des lettres majuscules
    var upperCaseLetters = /[A-Z]/g;
    if(myPassword.value.match(upperCaseLetters)) {  
      majuscule.classList.remove("invalid");
      majuscule.classList.add("valid");
    } else {
      majuscule.classList.remove("valid");
      majuscule.classList.add("invalid");
    }

    // Validation des chiffres
    var numbers = /[0-9]/g;
    if(myPassword.value.match(numbers)) {  
      nombre.classList.remove("invalid");
      nombre.classList.add("valid");
    } else {
      nombre.classList.remove("valid");
      nombre.classList.add("invalid");
    }
    
    // Validation de la taille du password
    if(myPassword.value.length >= 10) {
      longueur.classList.remove("invalid");
      longueur.classList.add("valid");
    } else {
      longueur.classList.remove("valid");
      longueur.classList.add("invalid");
    }  
}