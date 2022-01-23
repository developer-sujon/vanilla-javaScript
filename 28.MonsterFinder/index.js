import { monsters } from './monsters.js';

function showMonsters(monster) {
    const { id, name, email } = monster;

    const monsterDiv = createElement('div', 'monster');
    const img = createElement('img');
    img.setAttribute('src', `https://robohash.org/${id}?set=set2`);
    img.setAttribute = ('alt', `${name}`);
    const nameEl = createElement('p', 'name', `${name}`);
    const emailEl = createElement('p', 'email', `${email}`);

    monsterDiv.append(img, nameEl, emailEl);
    document.querySelector('.monsters').appendChild(monsterDiv);
};

(function () {
    const errorDiv = createElement('div', 'p-5 not-found d-none');
    const span = createElement('span');
    const h1 = createElement('h1', '', '🧟‍♂️ No Monster Found 🧟‍♂️');

    errorDiv.append(span, h1);
    document.querySelector('.monsters').appendChild(errorDiv);
})();

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className || '';
    element.innerText = text || '';
    return element;
}

for (const monster of monsters) {
    showMonsters(monster);
}

document.getElementById('form').addEventListener('keyup', function (e) {
    const keyWord = e.target.value.toLowerCase();
    const monsterDiv = document.querySelectorAll('.monster');

    let monsterFound = false;

    for (const monster of monsterDiv) {
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();

        if (name.indexOf(keyWord) !== -1 || email.indexOf(keyWord) !== -1) {
            monster.style.display = 'block';
            monsterFound = true;
        } else {
            monster.style.display = 'none';
        }
    }

    if (monsterFound) {
        document.querySelector('.not-found').style.display = 'none';
    } else {
        document.querySelector('.not-found').style.display = 'block';
    }

});

document.getElementById('form').addEventListener('submit', e => e.preventDefault());