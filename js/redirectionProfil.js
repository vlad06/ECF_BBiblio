// Ce code est uniquement lié à la page de connexion du site accessible via le 
// lien en haut à droite.
// Il sert à accéder aux pages principales des jury, auteur et admin
$(document).ready(function() {

  function afficher(data) {
        $("#theMain").empty();
        $("#theMain").append(data);
  }

  $("button[type=button]").on("click", (function() {
    if($("#login").val() == "jury") {           //si le login est jury
        $.ajax({
          method: "GET",
          url: "html/profilJury.html",          //on va sur la page jury
          data: {}
        }).done(function(res) {
          afficher(res);
        });
        return false;
    } else if($("#login").val() == "auteur") {  //si le login est auteur
        $.ajax({
          method: "GET",
          url: "html/profilAuteur.html",        //on va sur la page auteur
          data: {}
        }).done(function(res) {
        afficher(res);
        });
        return false;
    } else if($("#login").val() == "admin") { //si le login est admin
      $.ajax({
        method: "GET",
        url: "html/compteAdmin.html",         //on va sur la page admin
        data: {}
      }).done(function(res) {
      afficher(res);
      });
      return false;
    }
  }));


});