$(document).ready(function() {

  function afficher(data) {
        $("#theMain").empty();
        $("#theMain").append(data);
  }

  $("button[type=button]").on("click", (function() {
    if($("#login").val() == "jury") {
        $.ajax({
          method: "GET",
          url: "html/profilJury.html",
          data: {}
        }).done(function(res) {
          afficher(res);
        });
        return false;
    } else if($("#login").val() == "auteur") {
        $.ajax({
          method: "GET",
          url: "html/profilAuteur.html",
          data: {}
        }).done(function(res) {
        afficher(res);
        });
        return false;
    } else if($("#login").val() == "admin") {
      $.ajax({
        method: "GET",
        url: "html/compteAdmin.html",
        data: {}
      }).done(function(res) {
      afficher(res);
      });
      return false;
    }
  }));


});