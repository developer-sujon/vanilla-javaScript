//Define UI Elements
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const displayColor = document.getElementById("displayColor");
const button = document.querySelector('.button');

//Define Functions
const randomColorGenerator = () => {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getrandomNumber()];
    };

    document.body.style.backgroundColor = `${hexColor}`;
    displayColor.textContent = `${hexColor}`;
};

function getrandomNumber() {
    return Math.floor(Math.random() * hex.length)
}
//Define Event listener
button.addEventListener('click', randomColorGenerator);
randomColorGenerator();