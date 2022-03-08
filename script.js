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
  let nom = data.get("nom");
  let paht = data.get("paht");
  let marge = data.get("marge");
  let quantite = data.get("quantitestock");
  let degreAlcool = data.get("degre");

  if (data.get("selectType") == "autre") {
    contenuProd.style.visibility = "visible";
    degre.style.display = "none";

    product = new ProtoProduit(nom, paht, marge, quantite);

    console.log("sansAlcool");
  } else {
    contenuProd.style.visibility = "visible";

    product = new ProtoBalcool(nom, paht, marge, quantite, degreAlcool);

    console.log("avecAlcool");
  }
  validProduit.addEventListener("click", function () {
    console.log("J'ai validé");

    produittab.push(product);
    localStorage.setItem(`@produit `, JSON.stringify(produittab));
    console.log(product);
  });
}

/**
 *
 *Creation du prototype produit
 */

function ProtoProduit(nom, paht, marge, quantite) {
  this.nom = nom;
  this.paht = paht;
  this.marge = marge;
  this.quantite = quantite;
}

/**
 * Creation du prototype herité pour la boisson alcoolisée
 */

function ProtoBalcool(nom, paht, marge, quantite, degreAlcool) {
  // Appel de notre prototype général ProtoContact
  ProtoProduit.call(this, nom, paht, marge, quantite);
  this.degre = degreAlcool;
}
