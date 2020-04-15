//*********************VARIABLES**************** */
//variables utilisées à des fins de test
var oeuvresNotees = [
  { 
    "oeuvre": [{ 
      "titre": "Argot fransé t'as vu",
      "auteur": "djoul",
      "date": "2020",
      "editeur": "goncourt"
    }],
    "categorie": "biographie",
    "note": true,
    "style": [1, 1, 1, 1, 1],
    "illustrations": [1, 1, 1, 1, 1],
    "miseEnPage": [1, 1, 1, 1, 1],
    "emotion": [1, 1, 1, 1, 1],
    "commentaire": ["aïe mes yeux", "pauvre france", "c'est triste", "...", "j'aurais mieux fait de me casser les deux bras !"]
  },
  {
    "oeuvre": [{
      "titre": "Autant en emporte le tsunami",
      "auteur": "amelie musso",
      "date": "2020",
      "editeur": "virilo"
    }],
    "categorie": "roman français",
    "note": true,
    "style": [6, 4, 5, 6],
    "illustrations": [4, 7, 5, 6],
    "miseEnPage": [6, 7, 4, 6],
    "emotion": [4, 5, 4, 6],
    "commentaire": ["moué...", "voilà voilà", "aeiouy", "méouédonkornikar"]
  },
  { "oeuvre": [{
      "titre": "asrtsdgf",
      "auteur": "sfqdgge",
      "date": "2019",
      "editeur": "femina"
    }],
    "categorie": "roman étranger",
    "note": true,
    "style": [5, 5, 4, 6, 7],
    "illustrations": [4, 2, 4, 6, 3],
    "miseEnPage": [6, 7, 7, 6, 7],
    "emotion": [7, 5, 8, 6, 7],
    "commentaire": ["j'ai rien compris...", "sjoiohf", "opiyhiohd", "hyeuhjcg", "du génie"]
  },
  {
    "oeuvre": [{
      "titre": "schtroumpf vert et vert schtroumpf",
      "auteur": "peyopopo",
      "date": "1987",
      "editeur": "lionel5ans"
    }],
    "categorie": "documentaire",
    "note": true,
    "style": [10, 10, 10, 10, 10],
    "illustrations": [10, 10, 10, 10, 10],
    "miseEnPage": [10, 10, 10, 10, 10],
    "emotion": [10, 10, 10, 10, 10],
    "commentaire": ["un grand moment de littérature", "book of the year", "book of the decade", "book of the century", "c'est chouette"]
  }
];
// ********************************************
// ****************LISTENERS******************
// ********************************************
// Listener pour le bouton download xml
document.querySelector("button[value=importXml]").addEventListener("click", fctCallXmlBase);
// Listener pour le select des oeuvres
document.querySelector("#listeOeuvres").addEventListener("change", fctSelectChange);

// On peuple le select avec les titres des oeuvres du tableau de test
var listeOeuvres = document.querySelector("#listeOeuvres");
var laDiv = document.querySelector(".tableauAvis");
var option;

for(var i = 0; i < oeuvresNotees.length; i++) {
  option = document.createElement("option");
  option.text = oeuvresNotees[i].oeuvre[0].titre;
  listeOeuvres.add(option);
}
// ********************************************
// ******************FUNCTIONS******************
// ********************************************
//Cette fonction récupère le fichier xml vide afin de lui donner les valeurs de l'oeuvre sélectionnée
function fctCallXmlBase(event) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      fctDownloadXml(this);
    }
  };
  xhr.open("get", "xml/livre.xml", true);
  xhr.send();
}

function fctDownloadXml(xmlData) {

  var xmlDoc = xmlData.responseXML;
  var theSelect = document.getElementById("listeOeuvres");
  var indexOeuvre = theSelect.selectedIndex;

  if(indexOeuvre == -1) {
    alert("Merci de sélectionner une oeuvre");
  } else {
    // on récupère les nodes nécessaires du fichier xml
    var categorie = xmlDoc.getElementsByTagName("categorie");
    var titre = xmlDoc.getElementsByTagName("titre");
    var auteur = xmlDoc.getElementsByTagName("auteur");
    var date = xmlDoc.getElementsByTagName("date");
    var editeur = xmlDoc.getElementsByTagName("editeur");
  
    var listeAvis = xmlDoc.getElementsByTagName("listeAvis");
    var avis = xmlDoc.getElementsByTagName("avis")[0];
    var nouvelAvis;
    var nombreAvis = oeuvresNotees[indexOeuvre].style.length;
    // on construit autant de nodes avis qu'il y a d'avis dans le tableau de test
    for(var i = 0; i < nombreAvis - 1; i++) {
      nouvelAvis = avis.cloneNode(true);
      nouvelAvis.setAttribute("num", (i + 2));
      listeAvis[0].appendChild(nouvelAvis);
    }
    // on récupère les listNodes du fichier xml
    var style = xmlDoc.getElementsByTagName("style");
    var illustrations = xmlDoc.getElementsByTagName("illustrations");
    var miseEnPage = xmlDoc.getElementsByTagName("miseEnPage");
    var emotion = xmlDoc.getElementsByTagName("emotion");
    var commentaire = xmlDoc.getElementsByTagName("commentaire");
    // on peuple les listNodes avec les données du tableau de test
    for(var i = 0; i < nombreAvis; i++) {
      style[i].innerHTML = oeuvresNotees[indexOeuvre].style[i];
      illustrations[i].innerHTML = oeuvresNotees[indexOeuvre].illustrations[i];
      miseEnPage[i].innerHTML = oeuvresNotees[indexOeuvre].miseEnPage[i];
      emotion[i].innerHTML = oeuvresNotees[indexOeuvre].emotion[i];
      commentaire[i].innerHTML = oeuvresNotees[indexOeuvre].commentaire[i];
    }
    // on peuple les nodes du fichier xml avec les données du tableau de test
    categorie[0].innerHTML = oeuvresNotees[indexOeuvre].categorie;
    titre[0].innerHTML = oeuvresNotees[indexOeuvre].oeuvre[0].titre;
    auteur[0].innerHTML = oeuvresNotees[indexOeuvre].oeuvre[0].auteur;
    date[0].innerHTML = oeuvresNotees[indexOeuvre].oeuvre[0].date;
    editeur[0].innerHTML = oeuvresNotees[indexOeuvre].oeuvre[0].editeur;
    // on "transforme" le fichier xml en fichier texte
    var serializer = new XMLSerializer();
    var xmlText = serializer.serializeToString(xmlDoc);
    // on crée l'élément qui nous servira de lien 
    var pom = document.createElement("a");
    // on définit le nom par défaut du fichier qui sera donné à télécharger
    var filename = "listeAvis.xml";
    var theBlob = new Blob([xmlText], {type: "text/plain"});
    // on ajoute les attributs href et download à l'élément <a> crée plus haut
    pom.setAttribute("href", window.URL.createObjectURL(theBlob));
    pom.setAttribute("download", filename);
  
    pom.dataset.downloadurl = ["text/plain", pom.download, pom.href].join(":");
    // on lance le téléchargement
    pom.click();
  }
}

function fctSelectChange(event) {
  // on récupère la position actuelle de l'index dans la selectList
  var sIndex = event.target.selectedIndex;
  // on récupère les éléments nécessaires
  var titre = document.querySelector(".titre");
  var auteur = document.querySelector(".auteur");
  var categorie = document.querySelector(".categorie");
  var laDate = document.querySelector(".date")
  
  var divToAppendClone = document.querySelector("#listeAvisJury");
  var clonedDiv;
  // on peuple les champs correspondant au titre, auteur, catégorie de l'oeuvre sélectionnée
  titre.innerHTML = oeuvresNotees[sIndex].oeuvre[0].titre;
  auteur.innerHTML = oeuvresNotees[sIndex].oeuvre[0].auteur;
  categorie.innerHTML = oeuvresNotees[sIndex].categorie;
  laDate.innerHTML = oeuvresNotees[sIndex].oeuvre[0].date;
  var nbCommentaires = oeuvresNotees[sIndex].commentaire.length;
  var listeTableCom;
    
  // On crée autant de div qu'il y a d'avis à récupérer
  if(document.querySelector(".numeroAvis").innerHTML == "") {
    for(var i = 0; i < nbCommentaires; i++) {
      clonedDiv = laDiv.cloneNode(true);
      divToAppendClone.append(clonedDiv);
    }
    divToAppendClone.removeChild(divToAppendClone.lastChild);
    // on récupère la liste de toutes les div correspondant au nombre d'avis crées précédemment
    listeTableCom = document.querySelectorAll(".tableauAvis");
  } else {
    listeTableCom = document.querySelectorAll(".tableauAvis");
    // s'il y a plus de divs que de commentaires, on enlève tout ce qui est en trop
    if(nbCommentaires < listeTableCom.length) {
      for(var i = 0; i < (listeTableCom.length - nbCommentaires); i++) {
        divToAppendClone.removeChild(divToAppendClone.lastChild);
      }
      // s'il y a plus de commentaires que de divs, on rajoute ce qui est nécessaire pour afficher tous les avis
    } else if(nbCommentaires > listeTableCom.length) {
      for(var i = 0; i < (nbCommentaires - listeTableCom.length); i++) {
        clonedDiv = laDiv.cloneNode(true);
        divToAppendClone.append(clonedDiv);
      }
    }
  }
  
  listeTableCom = document.querySelectorAll(".tableauAvis");
  // On peuple chacune des divs avis une par une
  for(var i = 0; i < nbCommentaires; i++) {
    listeTableCom[i].querySelector(".numeroAvis").innerHTML = (i + 1);
    listeTableCom[i].querySelector("textarea[name=commentaires]").innerHTML = oeuvresNotees[sIndex].commentaire[i];
    listeTableCom[i].querySelector("td[name=one]").innerHTML = oeuvresNotees[sIndex].style[i];
    listeTableCom[i].querySelector("td[name=two]").innerHTML = oeuvresNotees[sIndex].illustrations[i];
    listeTableCom[i].querySelector("td[name=three]").innerHTML = oeuvresNotees[sIndex].miseEnPage[i];
    listeTableCom[i].querySelector("td[name=four]").innerHTML = oeuvresNotees[sIndex].emotion[i];
  }
  
  //on affiche la div une fois qu'elle est complète : 
  document.querySelector("#listeAvisJury").style.display = "block";

}

