let contenuProd = document.querySelector("#saisie");
// let dataProd = document.querySelector(".typeProduit");
let degre = document.querySelector("#degre");
let detailProduit = document.querySelector(".accordion-body");
let produittab = [];
let validProduit = document.querySelector("#validNewProd");
let fermeture = document.querySelector("#Close");
let product;
let PrixHT = document.querySelector("#PrixHT").value;
let PrixTTC = document.querySelector("#PrixTTC").value;
let valeurPrixHT = document.createElement("span");
let valeurPrixTTC = document.createElement("span");

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

    let containerPrixTTC = document.querySelector(".containerPrixTTC");
    let containerPrixHT = document.querySelector(".containerPrixHT");
    PrixHT = paht * marge;
    PrixTTC = PrixHT * 1.2;

    if (data.get("selectType") == "autre") {
      product = new ProtoProduit(nom, paht, marge, quantite, PrixHT, PrixTTC);
    } else {
      product = new ProtoBalcool(nom, paht, marge, quantite, PrixHT, PrixTTC);
    }
    // calcul prixHT et TTC avec cr??ation du <span> avec valeur du calcul //

    valeurPrixHT.innerText = PrixHT;
    containerPrixHT.appendChild(valeurPrixHT);

    valeurPrixTTC.innerText = PrixTTC;
    containerPrixTTC.appendChild(valeurPrixTTC);

    //-----------------------------------------------------//
    produittab.push(product);
    localStorage.setItem(`@produit `, JSON.stringify(produittab));
  };
}

fermeture.addEventListener("click", function () {
  dataQuery.reset();
  contenuProd.style.visibility = "hidden";
  valeurPrixHT.innerText = "";
  valeurPrixTTC.innerText = "";
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
 * Creation du prototype herit?? pour la boisson alcoolis??e
 */

function ProtoBalcool(nom, paht, marge, quantite, PrixHT, PrixTTC, degre) {
  // Appel de notre prototype g??n??ral ProtoContact
  ProtoProduit.call(this, nom, paht, marge, quantite, PrixHT, PrixTTC);
  this.degre = degre;
}
