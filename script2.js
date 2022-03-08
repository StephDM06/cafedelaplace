let titreProduit = document.querySelector("#titreProduit");

let detailProduit = document.querySelector("#remplir");

let produittab = [];

if (localStorage.getItem("@produit ") == "") {
  produittab = [];
  console.log("y en a pas");
} else {
  produittab = JSON.stringify(localStorage.getItem("@produit "));
  console.log("y en a");
  produittab = JSON.parse(localStorage.getItem("@produit "));
  console.log(JSON.parse(localStorage.getItem("@produit ")));
  let content = "";
  let title = "";

  produittab.forEach((element) => {
    console.log(element.paht);

    content += `
              <p> Prix d'achat HT: ${element.paht}
              <p> Quantité en stock: ${element.quantite}
              <p> Prix de vente TTC: ${element.PrixTTC}

          </p><button class="deleteButton">Supprimer </button>`;
    title += `
      ${element.nom}`;
    detailProduit.innerHTML = content;
    titreProduit.innerHTML = title;
  });
}

/* <button class="deleteButton">Supprimer </button>; */

// function showProduit() {
//   let content = "";
//   produittab.forEach(function (element) {
//     console.log("element.type");
//     content += `
//         <p> Prénom: ${paht}
//         </p> Nom: ${pvttc}`;

//     <button class="deleteButton">Supprimer </button>;

//     detailProduit.innerHTML = content;
//   });

//   // deleteContact();
// }
