"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

window.addEventListener("load", function() {
    
	let button = document.getElementById("calculate");

	button.addEventListener("click", function() {
		let weightObj = document.getElementById("weight");
		let heightObj = document.getElementById("height");

		let height = parseFloat(heightObj.value.replace(",", "."));
		let weight = parseFloat(weightObj.value.replace(",", "."));

		let bmi = (weight / (height * height));

		bmi = Math.round((bmi * 10) / 10;

		alert("Dein Bmi ist: " + bmi);
	});

});