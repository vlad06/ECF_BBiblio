document.querySelectorAll("button[value=modifier]").forEach((bouton) => {
    bouton.addEventListener("click", fctModifTxt);
  });
document.querySelector("button[value=valider]").addEventListener("click", fctValidation);

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

function fctValidation(event) {
  var checkboxList = document.querySelectorAll("input[type=checkbox]");
  var cbChecked = [];
  var atLeastOneChecked = false;
  for(var i = 0; i < checkboxList.length; i++) {
    if(checkboxList[i].checked) {
      cbChecked.push(checkboxList[i].id);
      atLeastOneChecked = true;
    }
  }
  if(atLeastOneChecked) {
    var resultat = confirm("êtes-vous sûr de ces choix ? Vous ne pourrez plus faire de modifications par la suite.");
    if(resultat) {                      // si le jury est sûr de ces choix, on l'envoie sur son profil
      console.log(cbChecked);           // liste des catégories cochées par le futur jury
      $.ajax({
        method: "GET",
        url: "html/profilJury.html",
        data: {}
      }).done(function(res) {
        afficher(res);
      });
    }
  } else {
    alert("Vous devez choisir au moins une catégorie !");
  }
}

function afficher(data) {
  // $("#theMain").fadeOut('500', function() {
      $("#theMain").empty();
      $("#theMain").append(data);
      // $("#theMain").fadeIn('500');
  // });
}
