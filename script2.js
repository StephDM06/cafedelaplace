let globalstock = document.querySelector(".touslesproduits");

let produittab = [];

if (localStorage.getItem("@produit ") == "") {
  produittab = [];
  console.log("y en a pas");
} else {
  produittab = JSON.stringify(localStorage.getItem("@produit "));
  console.log("y en a");
  produittab = JSON.parse(localStorage.getItem("@produit "));
  console.log(JSON.parse(localStorage.getItem("@produit ")));

  envoiDonnees();
}

function envoiDonnees() {
  let content = "";
  produittab.forEach((element) => {
    let create = document.createElement("div");

    content = `
    <div class="produit">
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <div class="row inside1">
          <div class="col-md-8 part1">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                id="titreProduit"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <p>${element.nom}</p>
              </button>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="row contenu">
          <div class="col-md-8">
            <div class="accordion-body" id="remplir">
            <p> Prix d'achat HT: ${element.paht}
              <p> Quantité en stock: ${element.quantite}
              <p> Prix de vente TTC: ${element.PrixTTC}

          </p><button class="deleteButton"><i class="fa fa-trash"></i></button> </button></div>
          </div>
        </div>
              `;

    let titreProduit = document.querySelector("#titreProduit");

    let detailProduit = document.querySelector("#remplir");

    // let newProduit = document.querySelector(".produit");
    create.innerHTML = content;

    globalstock.appendChild(create);
  });
  effacer();

  // return { content, title };
}
let produit = document.querySelectorAll(".produit");

let contenu = document.querySelectorAll("#remplir");

function effacer() {
  let buttonQuery = document.querySelectorAll(".deleteButton");

  buttonQuery.forEach(function (buttonDeletes, index) {
    buttonDeletes.addEventListener("click", function () {
      produittab.splice(index, 1);
      produit[index].remove();
      contenu[index].remove();
      localStorage.setItem(`@produit `, JSON.stringify(produittab));
      // envoiDonnees();
    });
  });
  // buttonQuery.addEventListener("click", function () {

  //   produit.remove();
  //
  // });
}
