const meterToFeet = 3.281;
const literToGallon = 0.264172;
const kilogramToPound = 2.205;

const numberInput = document.getElementById("number-input");
const length = document.getElementById("length");
const button = document.getElementById("btn");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

const displayConversions = (number, input1, input2, pElement, text1, text2) => {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");

  p.appendChild(document.createTextNode(`${number} ${text2} = `));
  span1.textContent = `${input1} ${text1}`;
  p.appendChild(span1);
  p.appendChild(document.createTextNode(` | ${number} ${text1} = `));
  span2.textContent = `${input2} ${text2}`;
  p.appendChild(span2);
  pElement.innerHTML = "";
  pElement.appendChild(p);
};

function lengthConvert() {
  const number = numberInput.value;
  const feet = (number * meterToFeet).toFixed(3);
  const meter = (number / meterToFeet).toFixed(3);
  displayConversions(number, feet, meter, length, "feet", "meters");
}

function volumeConvert() {
  const number = numberInput.value;
  const gallon = (number * literToGallon).toFixed(3);
  const liter = (number / literToGallon).toFixed(3);
  displayConversions(number, gallon, liter, volume, "gallons", "liters");
}

function massConvert() {
  const number = numberInput.value;
  const pound = (number * kilogramToPound).toFixed(3);
  const kilogram = (number / kilogramToPound).toFixed(3);
  displayConversions(number, pound, kilogram, mass, "pounds", "kilograms");
}

function handleClick() {
  if (numberInput.value > 0) {
    lengthConvert();
    massConvert();
    volumeConvert();
    button.removeEventListener("click", handleClick);
    button.disabled = true;
  }
}

button.addEventListener("click", handleClick);

numberInput.addEventListener("input", () => {
  if (numberInput.value > 0) {
    if (button.disabled) {
      button.disabled = false;
      button.addEventListener("click", handleClick);
    }
  }
});
