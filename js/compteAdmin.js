// ********************************************************
// ******************  LISTENERS  *************************
// ********************************************************
// listeners click pour les onglets
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function(event) {
    openTab(event, event.target.value);
  })
});
// listeners click pour les boutons accepter et refuser candidat
document.querySelectorAll("button[value=accepterCandidat], button[value=refuserCandidat").forEach((btn) => {
  btn.addEventListener("click", function(event) {
    processCandidat(event);
  })
});
// listener change pour les select
document.querySelectorAll("select[name=candidatsJury], select[name=juryEnAttente], select[name=juryActuel]")
  .forEach((select) => {
    select.addEventListener("change", selectChange);
});
// listener sur les boutons pour l'arrêt des candidatures
document.querySelector("button[value=stopJury]").addEventListener("click", function() {
  alert("Un mail vient d'être envoyé à tous les candidats jurys n'ayant pas été sélectionnés!!");
});
document.querySelector("button[value=stopAuteur]").addEventListener("click", function() {
  alert("Un mail vient d'être envoyé à tous les candidats Auteurs n'ayant pas été sélectionnés!!");
});

// ********************************************************
// ******************  ACTIONS  ***************************
// ********************************************************
// pour ouvrir un tab par défaut
document.getElementById("defaultOpen").click();

// ********************************************************
// ******************  FONCTIONS  *************************
// ********************************************************
// function for the tabs
function openTab(event, tabName) {
  var tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");

  }
  document.getElementById(tabName).style.display = "block";
  event.target.className += " activeTab";

}

//Pour ajouter ou refuser une candidature pour le jury
function processCandidat(event) {
  var resultat;
  var nomDuJury = document.querySelector("input[name=nom]").value;

  if(nomDuJury) {
    if(event.target.value == "accepterCandidat") {
      resultat = confirm("Etes-vous sûr de vouloir accepter ce candidat ?");
      if(resultat) {
        alert("Un mail d'accord vient d'être envoyé au candidat !");
        var listeCandidatsEnAttente = document.querySelector("select[name=juryEnAttente]");
        var listeCandidats = document.querySelector("select[name=candidatsJury]");
        listeCandidatsEnAttente.appendChild(listeCandidats[listeCandidats.selectedIndex]);
      } 
    } else {
      resultat = confirm("Etes-vous sûr de vouloir refuser ce candidat ?");
      if(resultat) {
        alert("Un mail de refus vient d'être envoyé au candidat !");
        var listeCandidats = document.querySelector("select[name=candidatsJury]");
        // var selectedValue = listeCandidats[listeCandidats.selectedIndex].value;
        listeCandidats.removeChild(listeCandidats[listeCandidats.selectedIndex]);
      }
    }
  } else {
    alert("Vous devez sélectionner un candidat jury ! ");
  }
}

function selectChange(event) {
  document.querySelector("input[name=nom]").value = event.target.value;
  if(event.target.name == "candidatsJury") {
    document.querySelector("button[value=accepterCandidat]").style.display = "block";
    document.querySelector("button[value=refuserCandidat]").style.display = "block";
  } else {
    document.querySelector("button[value=accepterCandidat]").style.display = "none";
    document.querySelector("button[value=refuserCandidat]").style.display = "none";
  }
}