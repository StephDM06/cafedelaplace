let contenuProd = document.querySelector("#saisie");
let degre = document.querySelector("#degre");
let detailProduit = document.querySelector(".accordion-body");
let produittab = [];
let validProduit = document.querySelector("#validNewProd");
let product;

let dataQuery = document.querySelector("#detailProd");

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
  }

  validProduit.addEventListener("click", function () {
    let nom = document.querySelector("#name").value;
    let paht = document.querySelector("#pachat").value;
    let marge = document.querySelector("#coeff").value;
    let quantite = document.querySelector("#quantite").value;
    let PrixHT = document.querySelector("#PrixHT");
    let PrixTTC = document.querySelector("#PrixTTC");
    if (data.get("selectType") == "autre") {
      product = new ProtoProduit(nom, paht, marge, quantite, PrixHT, PrixTTC);

      console.log("sansAlcool");
    } else {
      product = new ProtoBalcool(nom, paht, marge, quantite, PrixHT, PrixTTC);

      console.log("avecAlcool");
    }

    produittab.push(product);
    localStorage.setItem(`@produit `, JSON.stringify(produittab));
    console.log(product);
  });
}

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
