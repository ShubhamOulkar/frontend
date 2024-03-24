"use strict";

const radioButtons = document.querySelectorAll("input[type='radio']");
const numberButtons = document.querySelectorAll("input[type='number']");
const result = document.querySelector(".results p");
const unitElements = document.querySelectorAll(".unit");
const imperialElements = document.querySelectorAll(".imperial");

// check selected standard inputs

let standard = "metric";
let bmi;

radioButtons.forEach((radio) => radio.addEventListener("change", setStandard));

function setStandard(e) {
  standard = e.target.id;

  if (e.target.id === "imperial") {
    // hide metric units
    unitElements.forEach((unit) => {
      unit.style.display = "none";
    });
    // show imperial units
    imperialElements.forEach((imperial) => {
      imperial.style.display = "inline";
    });
  } else {
    // show metric units
    unitElements.forEach((unit) => {
      unit.style.display = "inline";
    });
    // hide imperial units
    imperialElements.forEach((imperial) => {
      imperial.style.display = "none";
    });
  }
}

//calculate bmi
function calculateBMI(weight, height) {
  bmi = (
    standard === "metric" ? weight / height ** 2 : (weight / height ** 2) * 703
  ).toFixed(2);
}

// output results to user

function showResult() {
  result.innerHTML = "";
  if (bmi <= 18.5) {
    result.innerHTML = `<strong>BMI: ${bmi}</strong> You are underweight range.`;
  } else if (bmi <= 24.9) {
    result.innerHTML = `<strong>BMI: ${bmi}</strong> You are within Healthy Weight range.`;
  } else if (bmi <= 29.9) {
    result.innerHTML = `<strong>BMI: ${bmi}</strong> You are within the overweight range.`;
  } else if (bmi >= 30) {
    result.innerHTML = `<strong>BMI: ${bmi}</strong>  You are falls within the obese range.`;
  }
  console.log(bmi); //delete this line
}

numberButtons.forEach((number) => number.addEventListener("change", checkData));

function checkData(e) {
  // get the values
  const height = Number(document.querySelector("#height").value);
  const weight = Number(document.querySelector("#weight").value);

  // check validity of values :
  // 1) no need to check for empty value. Number() convert "" into 0 value.
  // 2) no need to check for sting input value because input element type is number. By default user can not input string .

  if (e.target.value === "0" || e.target.value === "")
    alert("Please chack value!");

  if (height !== 0 && weight !== 0) {
    calculateBMI(weight, height);
    showResult();
  }
}
