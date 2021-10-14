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
const erreurprenom = document.getElementById('fielderror');
const erreurnom = document.getElementById('fielderror2');
const erreurmail = document.getElementById('fielderror3');



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}


//  Fermer la Modale // 


const closeBtn = document.querySelector(".close");


closeBtn.addEventListener('click', function () {

	modalbg.style.display = "none";


}
)


// Implémenter entrées du formulaire//


document.getElementById('location2').checked = true;


// Ajouter validation ou messages d'erreur// 


document.getElementById('btn-test').addEventListener("click",function(){

	// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.


	const valeurprenom = document.getElementById("prenom").value;
	
	console.log(valeurprenom);
	
	

	erreurprenom.style.display= "none";

	if(valeurprenom.length < 2){
		
		
		erreurprenom.style.display= "inline-block";
		
		
		
		
	}
	//"Veuillez entrer 2 caractères ou plus pour le champ du nom."//


	const valeurnom = document.getElementById("nom").value;

	erreurnom.style.display= "none";

	if(valeurnom.length < 2){
		
		
		erreurnom.style.display= "inline-block";
		
		
		
		
	}

	
	// Vérifier adresse Email// 
	


		
	


	
})	






  


	

	//"Vous devez choisir une option."//


	//"Vous devez vérifier que vous acceptez les termes et conditions."


	//"Vous devez entrer votre date de naissance."//

