//Define UI Elements
const input = document.getElementById('input');
const button = document.getElementById('check');
const displayPalindrome = document.getElementById('displayPalindrome');

//Define Event listener
button.addEventListener('click', palindromeCheck);

//Define Functions
function palindromeCheck(e) {
    if (input.value) {
        const word = input.value.toLowerCase();
        const start = word.substring(0, Math.floor(word.length / 2));
        const end = word.substring(word.length - Math.floor(word.length / 2));
        const flip = end.split('').reverse().join('');

        if (flip == start) {
            displayPalindrome.innerHTML = `${word.toUpperCase()} is a Palindrome.`;
            displayPalindrome.style.color = `tomato`;
        } else {
            displayPalindrome.innerHTML = `${word.toUpperCase()} is not Palindrome.`;
            displayPalindrome.style.color = `red`
        }

        input.value = '';
    }else{
        alert('Please enter a valid Palindrome name thanks to you.');
    }
}
