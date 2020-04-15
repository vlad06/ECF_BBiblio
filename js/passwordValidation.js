var myPassword = document.getElementById("password");
var minuscule = document.getElementById("minuscule");
var majuscule = document.getElementById("majuscule");
var nombre = document.getElementById("nombre");
var longueur = document.getElementById("longueur");
var btnReset = document.querySelector("button[type=reset]");

// When the user hit the button reset
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

// When the user starts to type something inside the password field
myPassword.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myPassword.value.match(lowerCaseLetters)) {  
      minuscule.classList.remove("invalid");
      minuscule.classList.add("valid");
    } else {
      minuscule.classList.remove("valid");
      minuscule.classList.add("invalid");
    }
    
    // Validate majuscule letters
    var upperCaseLetters = /[A-Z]/g;
    if(myPassword.value.match(upperCaseLetters)) {  
      majuscule.classList.remove("invalid");
      majuscule.classList.add("valid");
    } else {
      majuscule.classList.remove("valid");
      majuscule.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myPassword.value.match(numbers)) {  
      nombre.classList.remove("invalid");
      nombre.classList.add("valid");
    } else {
      nombre.classList.remove("valid");
      nombre.classList.add("invalid");
    }
    
    // Validate longueur
    if(myPassword.value.length >= 10) {
      longueur.classList.remove("invalid");
      longueur.classList.add("valid");
    } else {
      longueur.classList.remove("valid");
      longueur.classList.add("invalid");
    }  
}