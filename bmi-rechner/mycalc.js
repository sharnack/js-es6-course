"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2
	

window.addEventListener("load", function() {
   
	let weightObj = document.getElementById("weight");
	let heightObj = document.getElementById("height");
	

	let calcBMI = function() {

		let height = parseFloat(heightObj.value.replace(",", "."));
		let weight = parseFloat(weightObj.value.replace(",", "."));

		let bmi = (weight / (height * height));

		let result = Math.round(bmi * 10) / 10;

		let resultObj = document.getElementById("result");
		resultObj.innerText = ("" + result).replace(".", ",");
	}

	weightObj.addEventListener("change", calcBMI);
	heightObj.addEventListener("change", calcBMI);
	weightObj.addEventListener("keyup", calcBMI);
	heightObj.addEventListener("keyup", calcBMI);


});