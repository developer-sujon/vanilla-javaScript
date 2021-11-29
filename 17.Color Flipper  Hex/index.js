//Define UI Elements
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const displayColor = document.getElementById("displayColor");
const button = document.querySelector('.button');

//Define Functions
const randomColorGenerator = ()=>{
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    displayColor.textContent = `${colors[randomColor]}`;
};
//Define Event listener
button.addEventListener('click', randomColorGenerator);
randomColorGenerator();