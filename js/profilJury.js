// Variables pour tester le bon fonctionnement du script

var oeuvresNotees = [
  { "oeuvre": ["Argot fransé t'as vu", "djoul"],
    "categorie": "biographie",
    "note": true,
    "style": 1,
    "illustrations": 1,
    "miseEnPage": 1,
    "emotion": 1,
    "commentaire": "aïe mes yeux"
  },
  {
    "oeuvre": ["Autant en emporte le tsunami", "amelie musso"],
    "categorie": "roman français",
    "note": true,
    "style": 5,
    "illustrations": 3,
    "miseEnPage": 5,
    "emotion": 5,
    "commentaire": "moué..."
  },
  { "oeuvre": ["asrtsdgf", "sfqdgge"],
    "categorie": "roman étranger",
    "note": true,
    "style": 3,
    "illustrations": 2,
    "miseEnPage": 6,
    "emotion": 7,
    "commentaire": "j'ai rien compris..."
  },
  {
    "oeuvre": ["schtroumpf vert et vert schtroumpf", "peyopopo"],
    "categorie": "documentaire",
    "note": true,
    "style": 10,
    "illustrations": 10,
    "miseEnPage": 10,
    "emotion": 10,
    "commentaire": "un grand moment de littérature"
  }
];

var oeuvresANoter = [
  { "oeuvre": ["Ma vie mon oeuvre", "loana"],
    "catégorie": "biographie",
    "note": false
  },
  {
    "oeuvre": ["Tchoupi au zoo", "bernard minet"],
    "catégorie": "documentaire",
    "note": false
  },
  {
    "oeuvre": ["Je chante si bien", "djoul"],
    "catégorie": "roman étranger",
    "note": false
  },
  {
    "oeuvre": ["Prendre le coreau par les tornes", "guillaume nothomb"],
    "catégorie": "roman français",
    "note": false
  }
];

var tabOeuvresNotees = document.querySelector("#oeuvresNotees");
// **************************LISTENERS************************************
// listeners pour les tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function(event) {
    openTab(event, event.target.innerHTML);
  })
})
// listener pour le select catégorie
document.querySelector("select[name=cat]").addEventListener("change", fctChangeCat);
// listener pour le select oeuvres non notées
// ****************************FONCTIONS**********************************
// Construit une table contenant la liste des oeuvres déjà notées
function buildTable() {
  var table = document.createElement("table");
  var headCell;
  var headCellText;
  var tableHeader = document.createElement("thead");
  var tableBody = document.createElement("tbody");

  headCell = document.createElement("th");
  headCellText = document.createTextNode("Oeuvres");
  headCell.appendChild(headCellText);
  tableHeader.appendChild(headCell);
  headCell = document.createElement("th");
  headCellText = document.createTextNode("Notes");
  headCell.appendChild(headCellText);
  tableHeader.appendChild(headCell);

  table.appendChild(tableHeader);

  for(var i = 0; i < oeuvresNotees.length; i++) {             // the rows
    var tableBodyRow = document.createElement("tr");
    for( var j = 0; j < 2; j++) {                             // the columns
      var tableBodyCell = document.createElement("td");
      // tableBodyCell.setAttribute("class", "aDefinir");
      if(j == 0) {
        var cellText = document.createTextNode(oeuvresNotees[i].oeuvre[0]);
        tableBodyCell.appendChild(cellText);
      } else {
        var cellText = document.createTextNode("Voir les notes");
        tableBodyCell.appendChild(cellText);
        tableBodyCell.setAttribute("class", "active");
        // ajoute un listener sur la cellule du tableau
        tableBodyCell.addEventListener("click", fctClicNote);
      }
      tableBodyRow.appendChild(tableBodyCell);
    }
    tableBody.appendChild(tableBodyRow);
  }
  table.appendChild(tableBody);
  tabOeuvresNotees.appendChild(table);
}
//construite le tableau
buildTable();
// affiche dans le tab Note les notes de l'oeuvre sélectionnée
function fctClicNote(event) {
  console.log(event.target);
  console.log(event);
  document.querySelector(".tab").children[1].click();
}

// fonction pour la gestion des tabs
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
// pour la gestion du changement de catégories dans le select
function fctChangeCat(e) {
  console.log("changeCat");
}

var option;
var listeEnAttente = document.querySelector("select[name=listeAttente]");
for(var i = 0; i < oeuvresANoter.length; i++) {
  option = document.createElement("option");
  console.log(oeuvresANoter[i].oeuvre[0]);
  option.text = oeuvresANoter[i].oeuvre[0];
  listeEnAttente.add(option);
}