import { reviews } from './reviews.js';

//Define UI Elements
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentReview = 0;

//Define Functions
const showPersonData = (e) => {
    const personItem = reviews[currentReview];
    img.src = personItem.img;
    author.textContent = personItem.name;
    job.textContent = personItem.job;
    info.textContent = personItem.text;
}

const nextPersonData = (e) => {
    if (currentReview < reviews.length - 1) {
        prevBtn.disabled = false;
        currentReview++;
        showPersonData(currentReview);
    } else if (currentReview > reviews.length - 2) {
        e.currentTarget.disabled = true;
    }
}

const prevPersonData = (e) => {
    if (currentReview > 0) {
        nextBtn.disabled = false;
        currentReview--;
        showPersonData(currentReview);
    } else {
        e.currentTarget.disabled = true;
    }
}

const randomPersonData = (e) => {
    currentReview = Math.floor(Math.random() * reviews.length);
    showPersonData(currentReview);
}
//Define Event listener
window.addEventListener('DOMContentLoaded', showPersonData);
nextBtn.addEventListener('click', nextPersonData);
prevBtn.addEventListener('click', prevPersonData);
randomBtn.addEventListener('click', randomPersonData);