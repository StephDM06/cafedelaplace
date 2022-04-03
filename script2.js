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
  produittab.forEach((element,index) => {
    let create = document.createElement("div");

    content = `
    <div class="produit">
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <div class="row inside1">
          <div class="part1">
            <h2 class="accordion-header" id="flush-heading${index}">
              <button
                id="titreProduit"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse${index}"
                aria-expanded="false"
                aria-controls="flush-collapse${index}"
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
        id="flush-collapse${index}"
        class="accordion-collapse collapse"
        aria-labelledby="flush-heading${index}"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="row contenu">
          <div class="col-md-8">
            <div class="accordion-body" id="remplir">
            <p> Prix d'achat HT: ${element.paht}
              <p> Quantité en stock: ${element.quantite}
              <p> Prix de vente TTC: ${element.PrixTTC}

          </p><button class="deleteButton">Supprimer </button>
          </p><button class="modifButton">Modifier </button></div>
          </div>
        </div>
              `;
    create.innerHTML = content;

    globalstock.appendChild(create);
  });
  effacer();
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
function modifier() {
  let modifQuery = document.querySelectorAll(".modifButton");
  modifQuery.forEach(function (modifButtons, index) {
    modifButtons.addEventListener("click", function () {
      let newcontenu = createElement("div");
      let contenuModif;
      contenuModif = `<div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <label>Votre nouveau Produit</label>
            </h5>
            <button
            id="fermeture"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            
              <form  id="detailProd">
              <label for="typeProduit">Type de produit :</label>
              <select name="selectType" id="type-select" onchange="">
                <option value="">--Choisissez un type de produit--</option>
                <option value="autre">Boisson non Alcoolisée</option>
                <option value="balcool">Boisson alcoolisée</option>
                <option value="autre">Autre type de produit</option>
              </select>
              <input type="submit" value="Valider" />
            
              <div id="saisie">
            
            
              <label for="nom">Nom du produit: </label>
              <input
                type="text"
                placeholder="Nom du produit"
                id="name"
                name="nom"
                
              />
        
              <br />
        
              <label for="paht">Prix achat HT: </label>
              <input
                type="number"
                placeholder="PA HT"
                id="pachat"
                name="paht"
                
              />
        
              <br />
        
              <label for="marge">Marge/coefficient souhaité: </label>
              <input
                type="number"
                placeholder="marge"
                id="coeff"
                name="marge"
                
              />
        
              <br />
        
              <div class="containerPrixHT">
                <label for="pvht" id="PrixHT">Prix de vente HT: </label>
              </div>
              
              <br />
              <div class="containerPrixTTC">
                <label for="pvttc" id="PrixTTC">Prix de vente TTC : </label>
              </div>
              
        
              <br />
             
              <label for="degre">Degré d'alcool : </label>
              <input
                type="text  "
                placeholder="Degré d'alcool"
                id="degre"
                name="degre"
                
              />
              <br />
              
                <label for="quantite">Quantite à mettre en stock : </label>
                <input
                  type="text  "
                  placeholder="Quantité"
                  id="quantite"
                  name="quantitestock"
                  
                />
              
              <br />
        
              
              <br />
        
              
            </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              id="Close"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" id="validNewProd">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>`;

      newcontenu.innerHTML = contenuModif;

      // let write = newcontenu;
      // contenu.appendChild(write);
      // produit[index].remove();
      // contenu[index].remove();
      // localStorage.setItem(`@produit `, JSON.stringify(produittab));
    });
  });
}
