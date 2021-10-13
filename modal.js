function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//  Fermer la Modale // 


const closeBtn = document.querySelector(".close");


closeBtn.addEventListener('click',function(){

  modalbg.style.display="none";

}
)



// Implémenter entrées du formulaire//


document.getElementById('location2').checked = true;


// Ajouter validation ou messages d'erreur// 

document.querySelector('.bground') .addEventListener("submit", function(e){
e.preventDefault();
let erreur;
let infoprenom = document.getElementById("prenom");
let infonom = document.getElementById("nom");



if (!infoprenom.value){

erreur = "Veuillez entrer 2 caractères ou plus pour le champ du nom";

}




if (erreur){
  document.getElementById("erreur") .innerHTML= erreur;
}



  alert("Formulaire envoyé")
}

)