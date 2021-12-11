//Define UI Elements
const quoteText = document.querySelector('.quote');
const authorName = document.querySelector('.author');
const speechBtn = document.querySelector('.speech');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');
const quoteBtn = document.querySelector('.button');
const synth = speechSynthesis;

//Define Functions
async function getQuotes() {
    quoteBtn.innerText = 'Loading...';
    quoteBtn.classList.add('loading');
    const response = await fetch('https://api.quotable.io/random');
    const quotes = await response.json();
    displayQuote(quotes);
}
function displayQuote(quote) {
    const { author, content } = quote;
    authorName.innerText = author;
    quoteText.innerText = content;
    quoteBtn.innerText = 'New Quote';
    quoteBtn.classList.remove('loading');
}

//Define Event listener
document.addEventListener('DOMContentLoaded', getQuotes);
quoteBtn.addEventListener('click', getQuotes);

speechBtn.addEventListener('click', function () {
    const utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    synth.speak(utterance);
    setInterval(() => {
        !synth.speaking ? speechBtn.classList.remove('active') : speechBtn.classList.add('active');
    }, 10)
});

copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(quoteText.innerText)
})