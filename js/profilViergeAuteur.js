// *******************************************************************
// *****************************LISTENERS*****************************
// *******************************************************************

// listeners pour les boutons modifier qui servent à rectifier les champs txt
document.querySelectorAll("button[value=modifier]").forEach((bouton) => {
  bouton.addEventListener("click", fctModifTxt);
});
// listener pour le bouton Valider, valide le profil si au moins une oeuvre a été inscrite
document.querySelector("button[value=valider]").addEventListener("click", fctValidation);
// listener pour le bouton Ajouter une oeuvre, qui ouvre la fenêtre d'ajout d'oeuvre
document.querySelector("button[value=ajoutOeuvre]").addEventListener("click", function() {
  document.querySelector("#divAjoutOeuvre").style.display = "block";
});
// listeners pour les boutons annuler, qui ferment la fenêtre d'ajout d'oeuvre
document.querySelectorAll("button[value=annuler]").forEach((bouton) => {
  bouton.addEventListener("click", function() {
    document.querySelector("#divAjoutOeuvre").style.display = "none";
  });
});
// listener pour le bouton Ajouter qui permet d'ajouter une oeuvre à la selectBox
document.querySelector("button[value=ajouter]").addEventListener("click", fctAjoutOeuvre);

// *******************************************************************
// *******************************FONCTIONS*********************************
// *******************************************************************

// Permet la modification des txtBox une par une et change le style du bouton
function fctModifTxt(event) {
  if(event.target.innerHTML == "Modifier") {
    event.target.innerHTML = "Accepter";
    event.target.style.backgroundColor = "lightBlue";
    event.target.style.color = "black";
    event.target.parentNode.parentNode.children[0].children[0].disabled = false;
  } else {
    event.target.innerHTML = "Modifier";
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
    event.target.parentNode.parentNode.children[0].children[0].disabled = true;
  }
}
// Ajoute le titre d'une oeuvre à la selectBox
function fctAjoutOeuvre(e) {
  var leTitre = document.querySelector("#titre");
  var selectList = document.querySelector("#listeOeuvres");
  if(leTitre.value == "") {
    alert("Merci de remplir les champs de l'oeuvre");
  } else {
    var option = document.createElement("option");
    option.text = leTitre.value;
    selectList.add(option);
  }
}
//
function fctValidation(event) {
  var selectList = document.querySelector("#listeOeuvres");
  // si au moins une oeuvre a été saisie et inclue dans la selectBox
  if(selectList[1]) {
    var resultat = confirm("êtes-vous sûr de ces choix ? Vous ne pourrez plus faire de modifications par la suite.");
    // si l'auteur est sûr de ses choix, on l'envoie sur son profil
    if(resultat) {
      $.ajax({
        method: "GET",
        url: "html/profilAuteur.html",
        data: {}
      }).done(function(res) {
        afficher(res);
      });
    }
  } else {
    alert("Vous devez inscrire au moins une oeuvre pour participer !");
  }
}
// pour l'affichage de la page chargée via ajax (jquery)
function afficher(data) {
    $("#theMain").empty();
    $("#theMain").append(data);
}
