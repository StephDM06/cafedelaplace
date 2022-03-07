let contenuProd = document.querySelector("#saisie");
// let dataProd = document.querySelector(".typeProduit");
let degre = document.querySelector("#degre");
let detailProduit = document.querySelector(".accordion-body");
let produittab = [];
let validProduit = document.querySelector("#validNewProd");
let product;

// contenuProd.style.visibility = "hidden";

let dataQuery = document.querySelector("#detailProd");
// let data = new FormData(dataQuery);
// let nom = data.get("nom");
// let paht = data.get("paht");
// let marge = data.get("marge");
// let degreAlcool = data.get("degre");
// let quantite = data.get("quantite");

dataQuery.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = new FormData(dataQuery);
  let nom = data.get("nom");
  let paht = data.get("paht");
  let marge = data.get("marge");
  let degreAlcool = data.get("degre");
  let quantite = data.get("quantite");
  console.log(data.get("selectType"));

  if (data.get("selectType") == "autre") {
    contenuProd.style.visibility = "visible";
    degre.style.display = "none";
    product = new ProtoProduit(nom, paht, marge, quantite);
  } else {
    contenuProd.style.visibility = "visible";
    product = new ProtoBalcool(nom, paht, marge, quantite, degreAlcool);
  }

  validProduit.addEventListener("click", function () {
    console.log("J'ai validé");
    produittab.push(product);
    let ecriture = document.createElement("p");
    ecriture.innerText = detailProduit;
    localStorage.setItem(`@produit `, JSON.stringify(produittab));
  });
});

contenuProd.style.visibility = "hidden";

// ajoutProduit();

// function ajoutProduit() {
//   let content = "";
//   produittab.forEach(function (element) {
//     let nom = data.get("nomProduit");
//     let paht = data.get("paht");
//     let marge = data.get("marge");
//     let quantite = data.get("quantite");
//     content += `
//     <p> Nom du produit : ${nom}
//      Prix d'achat HT : ${paht}
//       Marge : ${marge}
//      Quantité : ${quantite}</p>
//     <br/>
//     <button class="boutonSupprime"> Supprimer </button>`;

//     detailProduit.innerHTML = content;
//   });
// }

// function produitSupprime() {
//   let boutonSupprime = document.querySelector(".boutonSupprime");

//   boutonSupprime.Array.forEach((element) => {});
//   (function (boutonSupprimes, index) {
//     boutonSupprimes.addEventListener("click", function () {
//       produittab.splice(index, 1);
//       ajoutProduit();
//     });
//   });
// }

/**
 *
 *Creation du prototype produit
 */

function ProtoProduit(nom, paht, marge) {
  this.nom = nom;
  this.paht = paht;
  this.marge = marge;
}

/**
 * Creation du prototype herité pour la boisson alcoolisée
 */

function ProtoBalcool(nom, paht, marge, degreAlcool) {
  // Appel de notre prototype général ProtoContact
  ProtoProduit.call(this, nom, paht, marge);
  this.degre = degreAlcool;
  this.type = "Boisson alcoolisée";
}
