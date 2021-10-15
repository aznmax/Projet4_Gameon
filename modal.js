function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements & Erreur // 
const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".submitted-form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const erreurprenom = document.getElementById('formerror');
const erreurnom = document.getElementById('formerror2');
const erreurmail = document.getElementById('formerror3');


// Regex // 

  //Regex

  const configregex=/^[a-zA-ZÀ-ÖØ-öø-ÿ---_]+$/;
  const regexmail = /^\S+@\S+\.\S+$/;


  

    // DISPLAY MODAL SUBMIT
	function displayModalSubmit() {
		modalbg.style.display = 'none';
		thankBg.style.display = 'block';
		}

// Erreur Formulaire // 

const erremail =document.querySelector("#erreur_email")
const erreurdate =document.querySelector("#erreur_date")
const erreurquestion = document.querySelector('#erreur_participation')
const erreurville = document.querySelector('#erreurville')



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


document.getElementById("btntest").addEventListener("click",function(e){




	
	// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.


	const valeurprenom = document.getElementById("prenom").value;
	
	console.log(valeurprenom);
	
	

	erreurprenom.style.display= "none";

	if(valeurprenom.length < 2){
		
		
		erreurprenom.style.display= "inline-block";
		
		
		
		
	}
	//"Veuillez entrer 2 caractères ou plus pour le champ du nom."//


	const valeurnom = document.getElementById("nom").value;

	console.log(valeurnom);

	erreurnom.style.display= "none";

	if(valeurnom.length < 2){
		
		
		erreurnom.style.display= "inline-block";
		
		
		
		
	}




	// Vérifier adresse Email// 

	
	if (!mail.value.match(regexmail)) {
		erremail.textContent = "veuillez renseigner un email";
		mail.classList.add ("formulaire_erreur")

	  }else {
		mail.classList.add ("formulaire_valid")
		erremail.textContent = "";
	  }



	// Date de Naissance // 

	if (!date.value) {
		erreurdate.textContent = "veuillez renseigner une date de naissance";
		date.classList.add ("formulaire_erreur")
	  }else {
		date.classList.add ("formulaire_valider")
		erreurdate.textContent = "";
	  }



	  //Nombre de  Participation // 

	  if (!question.value) {
		erreurquestion.textContent = "veuillez répondre à la question ";
		question.classList.add ("formulaire_erreur")
	  }else {
		question.classList.add ("formulaire_valider")
		erreurquestion.textContent = "";
	  }

	  // Choix de la ville // 

	
	if (!ville.value) {

		erreurville.textContent = "veuillez choisir une ville ";

	} else {
		erreurville.textContent = "";
	  }


 
	  if (nom.value && prenom.value && mail.value && date.value && question.value ) {
	
		ModalSubmit()  
		
	  } 

	
}


)



// confirmation formulaire
const modalSubmit = document.querySelector('.container-confirmation');
const closebtn = document.querySelector('#close-btn-confirmation')


closebtn.addEventListener('click', function () {

	modalbg2.style.display = "none";


}
)


// confirmation 

function ModalSubmit() {
	modalbg.style.display = 'none';	
	modalSubmit.style.display = 'block';

	
	
}





