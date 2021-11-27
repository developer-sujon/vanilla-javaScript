//Define UI Elements
const btn = document.getElementsByClassName('btn-primary')[0];
const randColor = document.getElementById('randColor');

//Define Event listener
btn.addEventListener('click', generarateColor);

//Define Functions
function generarateColor(e) {
    const rand =Math.random().toString(16).substring(2, 8);
    randColor.innerHTML =  `#${rand}`;
    document.querySelector('body').style.backgroundColor = `#${rand}`;
}
generarateColor();