// Code présent sur les pages devenirJury.html et participerPrix.html

//*************************LISTENERS******************************* */
//listener pour le bouton valider
// pour signifier au candidat jury ou auteur que sa demande à bien été prise en compte
document.querySelector("form").addEventListener("submit", function(e) {
  alert("Merci pour votre inscription. Vous recevrez prochainement un e-mail.");
})