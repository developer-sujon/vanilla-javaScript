//Define UI Elements
const input = document.getElementById('input');
const displayCharacter = document.getElementById('displayCharacter');

//Define Event listener
input.addEventListener('keyup', characterCount);

//Define Functions
function characterCount(e) {
    let count = (e.target.value).length;
    displayCharacter.innerHTML = count;
}