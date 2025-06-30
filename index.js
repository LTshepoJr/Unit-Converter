const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;
const numberInput = document.getElementById("number-input");
const length = document.getElementById("length");
const button = document.getElementById("btn");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
// commented out code is for safely inserting html code to the html file, but when I do it, the code is ran again and displays more than once//

// const displayConversions = (number, feet, meter, pElement) => {
//   const p = document.createElement("p");
//   const span1 = document.createElement("span");
//   const span2 = document.createElement("span");

//   p.appendChild(document.createTextNode(`${number} meters = `));
//   span1.textContent = `${feet} feet`;
//   p.appendChild(span1);
//   p.appendChild(document.createTextNode(` | ${number} feet = `));
//   span2.textContent = `${meter} meters`;
//   p.appendChild(span2);

//   pElement.appendChild(p);
// };

function lengthConvert() {
  const number = numberInput.value;
  const feet = (number * meterToFeet).toFixed(3);
  const meter = (number / meterToFeet).toFixed(3);
  //   length.insertAdjacentHTML(
  //     "beforeend",
  //     `<p>
  //       ${number} meters = <span>${feet} feet</span> | ${number} feet =
  //       <span>${meter} meters</span>
  //     </p>`
  //   );
  //   displayConversions(number, feet, meter, length);
  length.innerHTML = `<p>
    ${number} meters = <span>${feet} feet</span> | ${number} feet =
    <span>${meter} meters</span>
  </p>`;
}

function volumeConvert() {
  const number = numberInput.value;
  const gallon = (number * literToGallon).toFixed(3);
  const liter = (number / literToGallon).toFixed(3);
  //   volume.insertAdjacentHTML(
  //     "beforeend",
  //     `<p>
  //       ${number} liters = <span>${gallon} gallons</span> | ${number} gallons =
  //       <span>${liter} liters</span>
  //     </p>`
  //   );
  volume.innerHTML = `<p>
    ${number} liters = <span>${gallon} gallons</span> | ${number} gallons =
    <span>${liter} liters</span>
  </p>`;
}

function massConvert() {
  const number = numberInput.value;
  const pound = (number * kilogramToPound).toFixed(3);
  const kilogram = (number / kilogramToPound).toFixed(3);
  //   mass.insertAdjacentHTML(
  //     "beforeend",
  //     `<p>
  //       ${number} kilos = <span>${pound} pounds</span> | ${number} pounds =
  //       <span>${kilogram} kilos</span>
  //     </p>`
  //   );
  mass.innerHTML = `<p>
    ${number} kilos = <span>${pound} pounds</span> | ${number} pounds =
    <span>${kilogram} kilos</span>
  </p>`;
}

button.addEventListener("click", () => {
  lengthConvert();
  massConvert();
  volumeConvert();
});
