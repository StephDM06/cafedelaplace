let contenuProd = document.querySelector("#saisie");
// let dataProd = document.querySelector(".typeProduit");
let degre = document.querySelector("#degre");
let detailProduit = document.querySelector(".accordion-body");
let produittab = [];
let validProduit = document.querySelector("#validNewProd");
let fermeture = document.querySelector("#Close");
let product;

let dataQuery = document.querySelector("#detailProd");
contenuProd.style.visibility = "hidden";
let data = new FormData(dataQuery);
let nom = data.get("nom");
let paht = data.get("paht");
let marge = data.get("marge");
let degreAlcool = data.get("degre");
let quantite = data.get("quantite");

dataQuery.addEventListener("submit", function (e) {
  e.preventDefault();
  // let data = new FormData(dataQuery);
  // console.log(data.get("selectType"));

  remplirFormulaire();
});

contenuProd.style.visibility = "hidden";

function remplirFormulaire() {
  let data = new FormData(dataQuery);

  if (data.get("selectType") == "autre") {
    contenuProd.style.visibility = "visible";
    degre.style.display = "none";
  } else {
    contenuProd.style.visibility = "visible";
    degre.style.display = "block";
  }

  validProduit.onclick = function () {
    let nom = document.querySelector("#name").value;
    let paht = document.querySelector("#pachat").value;
    let marge = document.querySelector("#coeff").value;
    let quantite = document.querySelector("#quantite").value;

    // variables pour calcul des prixHT et TTC //
    let PrixHT = document.querySelector("#PrixHT").value;
    let PrixTTC = document.querySelector("#PrixTTC").value;
    let containerPrixTTC = document.querySelector(".containerPrixTTC");
    let containerPrixHT = document.querySelector(".containerPrixHT");
    PrixHT = paht * marge;
    PrixTTC = PrixHT * 1.2;

    if (data.get("selectType") == "autre") {
      product = new ProtoProduit(nom, paht, marge, quantite, PrixHT, PrixTTC);

      console.log("sansAlcool");
    } else {
      product = new ProtoBalcool(nom, paht, marge, quantite, PrixHT, PrixTTC);

      console.log("avecAlcool");
    }
    // calcul prixHT et TTC avec création du <span> avec valeur du calcul //

    let valeurPrixHT = document.createElement("span");
    valeurPrixHT.innerText = PrixHT;
    containerPrixHT.appendChild(valeurPrixHT);

    let valeurPrixTTC = document.createElement("span");
    valeurPrixTTC.innerText = PrixTTC;
    containerPrixTTC.appendChild(valeurPrixTTC);

    //-----------------------------------------------------//
    produittab.push(product);
    localStorage.setItem(`@produit `, JSON.stringify(produittab));
    console.log("coucou", produittab);
  };
    this.valeurPrixHT = "";
    this.valeurPrixTTC = "";
}

fermeture.addEventListener("click", function () {
  dataQuery.reset();
  contenuProd.style.visibility = "hidden";

});


/**
 *
 *Creation du prototype produit
 */

function ProtoProduit(nom, paht, marge, quantite, PrixHT, PrixTTC) {
  this.nom = nom;
  this.paht = paht;
  this.marge = marge;
  this.quantite = quantite;
  this.PrixHT = PrixHT;
  this.PrixTTC = PrixTTC;
}

/**
 * Creation du prototype herité pour la boisson alcoolisée
 */

function ProtoBalcool(nom, paht, marge, quantite, PrixHT, PrixTTC, degre) {
  // Appel de notre prototype général ProtoContact
  ProtoProduit.call(this, nom, paht, marge, quantite, PrixHT, PrixTTC);
  this.degre = degre;
}
