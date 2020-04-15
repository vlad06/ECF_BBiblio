$(document).ready(function() {

  $("a[href*=pagePersoLaureat").on("click", (function() {
    $.ajax({
      method: "GET",
      url: "html/pagePersoLaureat.html",
      data: {}
    }).done(function(res) {
      afficher(res);
    });
    return false; 
  }));
  
  function afficher(data) {
    $("#theMain").empty();
    $("#theMain").append(data);
  }

});