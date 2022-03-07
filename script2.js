let titreProduit = document.querySelector("#titreProduit");

let detailProduit = document.querySelector("#remplir");
let produittab = [];

if (JSON.stringify(localStorage.getItem("@produit")) == "") {
  produittab = [];
  console.log("y en a pas");
} else {
  produittab = JSON.stringify(localStorage.getItem("@produit"));
  console.log("y en a");
  let nom = localStorage.getItem("nom");
  let paht = localStorage.getItem("paht");
  let PrixTTC = localStorage.getItem("PrixTTC");
  let content = "";
  let title = "";

  content += `
            <p> Prix d'achat HT: ${paht}
            <p> Prix de vente TTC: ${PrixTTC}
    
        </p><button class="deleteButton">Supprimer </button>`;
  title += `
    <p> Nom du produit ${nom}`;
  detailProduit.innerHTML = content;
  titreProduit.innerHTML = title;
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
