//Define UI Elements
const btn = document.getElementsByClassName('btn-primary')[0];
const randNumber = document.getElementById('randNumber');

//Define Event listener
btn.addEventListener('click', generarateNumber);

//Define Functions
function generarateNumber(e) {
    const rand = Math.floor(Math.random() * 10) + 1;
    randNumber.innerHTML = rand;
}
generarateNumber();