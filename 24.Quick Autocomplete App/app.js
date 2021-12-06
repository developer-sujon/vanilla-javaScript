//Define UI Elements
const search = document.getElementById('filterInput');
const matchList = document.getElementById('matchList');

//Define Functions
const searchState = async e => {
    const searchInput = e.target.value;

    //get states
    const response = await fetch('./data.json');
    const states = await response.json();

    //get match states
    let matchStates = states.filter(state => {
        const regex = new RegExp(`^${searchInput}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if (searchInput.length === 0) {
        matchStates = [];
    };
    matchList.innerHTML = '';

    matchOutput(matchStates)
};

//Display Match States 
const matchOutput = states => {
    if (states.length > 0) {
        const outputUI = states.map(state => {
            return `<div class="card card-body bg-dark my-3 text-light">
            <h5> ${state.name} (${state.abbr}) <span class="text-primary">${state.capital}</span></h5>
            <span>${state.lat}${state.long}</span>
        </div>`
        }).join('');
        matchList.innerHTML = outputUI;
    }
}

//Define Event listener
search.addEventListener('input', searchState)