
// Code permettant la navigation sur le site

$(document).ready(function() {
  //The NAV LINKS
  $("#nav li > a").on("click", ajaxCall);
  // THE LOGO LINK
  $("#logo a").on("click", ajaxCall);
  // the link to "mentions légales"
  $("#leftAndRights li > a").on("click", ajaxCall);
  // The connexion link (top-right of the page)
  $("#theConnexion a").on("click", ajaxCall);

  // this call is made for calling the pages and showing them
  // in the div named #theMain
  function ajaxCall(event) {
    var page = $(this).attr("href");
    $.ajax({
            method: "GET",
            url: page,
            data: {}
        }).done(function(res) {
            afficher(res);
        });
    return false;
  }
  // Showing the page resulting from the nav menu
  // in the place where we wait for it
  function afficher(data) {
        $("#theMain").empty();
        $("#theMain").append(data);
  }
  //Charge le lien de la page d'actualités comme page par défaut du site
  $(window).on("load", function() {
    $.ajax({
      method: "GET",
      url: "html/actu.html",
      data: {}
    }).done(function(result) {
      $("#theMain").empty();
      $("#theMain").append(result);
    });
    return false;
  });
});

