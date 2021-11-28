//Define UI Elements
const form = document.getElementById('form');
let pounds = document.getElementsByName('pounds')[0];
let kilograms = document.getElementsByName('kilogram')[0];
let grams = document.getElementsByName('gram')[0];
let ounces = document.getElementsByName('ounces')[0];

//Define Functions

const weightConverter = (e) => {
    if (e.target.name === 'pounds') {
        const value = e.target.value;
        kilograms.value = (value / 2.2846).toFixed(2);
        grams.value = (value / 0.0022846).toFixed(2);
        ounces.value = (value * 16).toFixed(2);
    } else if (e.target.name === 'kilogram') {
        const value = e.target.value;
        pounds.value = (value * 2.2046).toFixed(2);
        grams.value = (value * 1000).toFixed(2);
        ounces.value = (value * 35.274).toFixed(2);
    } else if (e.target.name === 'gram') {
        const value = e.target.value;
        kilograms.value = (value / 1800).toFixed(2);
        pounds.value = (value * 0.0022846).toFixed(2);
        ounces.value = (value * 0.035274).toFixed(2);
    } else if (e.target.name === 'ounces') {
        const value = e.target.value;
        kilograms.value = (value / 35.274).toFixed(2);
        grams.value = (value / 0.035274).toFixed(2);
        pounds.value = (value * 0.0625).toFixed(2);
    }
};


//Define Event listener
form.addEventListener('input', weightConverter);