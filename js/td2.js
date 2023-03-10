/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

let selectAlreadyUsed = false;

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//
	initSelect();
	createNewDiv();
	loadPageContent();
}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;





//----------Exercice 1 : Exercice 1 : Les évènements (obligatoire)----------

function initSelect() {
	//document.body.addEventListener('click', select, false);
	//document.body.addEventListener('click', select2, false);
}

function select(e) {
	if (e.target.style.backgroundColor === "red") {
		e.target.style.backgroundColor = "inherit";
	} else {
		e.target.style.backgroundColor = "red";
	}
}

function select2(e) {
	if (e.target !== document.getElementById('insert-div') && !document.getElementById('insert-div').contains(e.target)) {
		if (e.target.style.backgroundColor === "blue") {			
			selectAlreadyUsed = false;
			e.target.style.backgroundColor = "inherit";
		} else {
			if(!selectAlreadyUsed) {
				selectAlreadyUsed = true;
				e.target.style.backgroundColor = "blue";
				insertElement(e);
			} else {
				console.log("un élément est déjà séléctionné !");
			}
		}
	}
}

function insertElement(e) {
	const selectTropTop = document.getElementById("insert-type");
	const selectedElem = selectTropTop.options[selectTropTop.selectedIndex].text;
	//console.log(selectTropTop.options[selectTropTop.selectedIndex].text);
	const inputContent = document.getElementById("insert-text").value;
	//console.log(document.getElementById("insert-text").value);

	// Element à insérer
	const elementTropCool = document.createElement(selectedElem);
	elementTropCool.textContent = inputContent;
  
	// Insertion
	e.target.parentNode.insertBefore(elementTropCool, e.target);
}

function createNewDiv() {
	//Div
	const divTropCool = document.createElement('div');
	divTropCool.setAttribute('id', 'insert-div');
	//Select
	const selectTropCool = document.createElement('select');
	selectTropCool.setAttribute('id', 'insert-type');
	selectTropCool.setAttribute('name', 'type');
	//Option1
	const optionTropCool1 = document.createElement('option');
	optionTropCool1.setAttribute('value','div');
	optionTropCool1.textContent = 'div';
	//Option2
	const optionTropCool2 = document.createElement('option');
	optionTropCool2.setAttribute('value','p');
	optionTropCool2.textContent = 'p';
	//Option3
	const optionTropCool3 = document.createElement('option');
	optionTropCool3.setAttribute('value','span');
	optionTropCool3.textContent = 'span';

	//Input	
	const inputTropCool = document.createElement('input');
	inputTropCool.setAttribute('type', 'text');
	inputTropCool.setAttribute('id', 'insert-text');
	inputTropCool.setAttribute('value', 'My New Text Element');
	
	selectTropCool.appendChild(optionTropCool1);
	selectTropCool.appendChild(optionTropCool2);
	selectTropCool.appendChild(optionTropCool3);
	divTropCool.appendChild(selectTropCool);
	divTropCool.appendChild(inputTropCool);
	
	document.body.insertBefore(divTropCool, document.body.firstChild);
}


//----------EXERCICE 2 : parcours de l’objet document----------

function loadPageContent() {
	//console.log(document.body.textContent);
	const textBody = document.body.textContent;
	document.getElementById("searchBtn").addEventListener('click', (event) => {
		search();
	});
	document.getElementById("searchInteractiveText").addEventListener("input", function(event) {
		interactiveSearch();
	});
}
function search() {
	//console.log("EEEEEEEEH!"+document.getElementById("searchText").value);
	const searchValue = document.getElementById("searchText").value;
	if (searchValue === "") {
		console.log("vide");
	} else {
		const newStringReplace = '<span class="select">' + searchValue + "</span>";
		searchReplace(searchValue, newStringReplace);
	}

}	
function searchReplace(oldString, newString, element = document.body) {
	if (element.nodeType === Node.TEXT_NODE) {
		let texte = element.nodeValue;
		let nouveauTexte = texte.replace(oldString, newString);
		if (nouveauTexte !== texte) {
			let nouveauNoeud = document.createElement("span");
			nouveauNoeud.innerHTML = nouveauTexte;
			element.parentNode.replaceChild(nouveauNoeud, element);
		}
	} else if (element.nodeType === Node.ELEMENT_NODE) {
		for (let i = 0; i < element.childNodes.length; i++) {
			searchReplace(oldString, newString, element.childNodes[i]);
		}
	}
}
function interactiveSearch() {
	searchValue = document.getElementById("searchInteractiveText").value;
	if (searchValue === "") {
		console.log("vide");
	} else {
		newStringReplace = '<span class="select">' + searchValue + "</span>";
		searchReplace(searchValue, newStringReplace);
	}
}
