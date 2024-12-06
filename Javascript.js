
//Uppgift 4 - Skapa variabler
// Variabel 1: Checkboxen
const checkboxElement = document.querySelector("#divStyle");

// Variabel 2: Alla textfält
const textfieldElements = document.querySelectorAll(".textfield");

// Variabel 3: Knappen
const buttonElement = document.querySelector("#yourButtonId");

// Variabel 4: Div-elementet
const divElement = document.getElementById("tom");
const color = document.getElementById("color");


// 5 Skapa en fördefinierad funktion
function handleInput(event) {
  const e = event;

  console.log("triggas", e.target);

  const FNs = e.target.name;

  if (FNs === "content") {
    divElement.innerHTML = e.target.value;
  }
}

// 6 Koppla eventlyssnare

checkboxElement.addEventListener("change", handleInput);

textfieldElements.forEach(function (field) {
  field.addEventListener("input", handleInput);
});

buttonElement.addEventListener("click", function () {
  divElement.remove();
});

checkboxElement.addEventListener("change", function () {
  divElement.style.background = color.value;
});
