/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
const input = document.getElementById("userNumberInput")
const lenght = document.getElementById('Length')
const button = document.getElementById('btn')
const volume = document.getElementById('Volume')
const mass = document.getElementById('Mass')

function lenghtConvert() {
    let number = input.value
    let feet = (number * meterToFeet).toFixed(3)
    let meter = (number / meterToFeet).toFixed(3)
    lenght.innerHTML = `<p>${number} meters = ${feet} feet | ${number} feet = ${meter} meters</p>`
}

function volumeConvert() {
    let number = input.value
    let gallon = (number * literToGallon).toFixed(3)
    let liter = (number / literToGallon).toFixed(3)
    volume.innerHTML = `<p>${number} liters = ${gallon} gallons | ${number} gallons = ${liter} liters</p>`
}

function massConvert() {
    let number = input.value
    let pound = (number * kilogramToPound).toFixed(3)
    let kilogram = (number / kilogramToPound).toFixed(3)
    mass.innerHTML = `<p>${number} kilos = ${pound} pounds | ${number} pounds = ${kilogram} kilos</p>`
}

button.addEventListener('click', function() {
    lenghtConvert()
    massConvert()
    volumeConvert()
})