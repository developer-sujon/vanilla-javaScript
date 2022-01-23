//Define UI Element
const form = document.getElementById('ewallet-form');

//Define Events Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayItemLS();
    displayTotalBalance();
    displayIncome();
    displayExpenses();
})
form.addEventListener('submit', submitForm);

//Define Functions
function submitForm(e) {
    e.preventDefault();

    const time = getFormettedDate();
    const type = this.querySelector('select[name="type"]').value;
    const desc = this.querySelector('input[name="description"').value;
    const amount = this.querySelector('input[name="amount"]').value;

    if (desc && amount) {
        addItem({ type, desc, amount, time });
        addItemLS({ type, desc, amount, time });
        displayTotalBalance();
        displayIncome();
        displayExpenses();
        resetForm();
    } else {

    }
};

function resetForm() {
    document.querySelector('select[name="type"]').value = '+';
    document.querySelector('input[name="description"').value = '';
    document.querySelector('input[name="amount"]').value = '';
};

function addItem({
    type,
    desc,
    amount,
    time
}) {
    const itemCollection = document.querySelector('.list-group');
    const newItem = `<div class="item list-group-item d-flex align-items-center justify-content-between">
    <div class="item-description-time">
      <div class="item-description">
        <p>${desc}</p>
      </div>
      <div class="item-time">
        <p>${time}</p>
      </div>
    </div>
    <div class="${type == '+' ? 'text-primary' : 'text-danger'}">
      <p>${type}$${commaSep(parseInt(amount))}</p>
    </div>
  </div>`;

    itemCollection.insertAdjacentHTML('afterbegin', newItem);
};

function getFormettedDate() {
    const now = new Date().toLocaleString('en-us', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
    const date = now.split(',')[0].split(' ');
    const time = now.split(',')[1]
    return formattedDate = `${date[1]} ${date[0]},${time}`
}

function getItemsLS() {
    let items = localStorage.getItem('items');
    return items = items ? JSON.parse(items) : [];
};

function addItemLS({
    type,
    desc,
    amount,
    time
}) {
    const items = getItemsLS();
    items.push({
        type,
        desc,
        amount,
        time
    });

    localStorage.setItem('items', JSON.stringify(items));
}

function displayItemLS() {
    const items = getItemsLS();
    for (const item of items) {
        addItem(item);
    }
}

function displayIncome() {
    const items = getItemsLS();
    const totalIncome = items.filter(item => item.type === '+')
        .reduce((income, item) => income + parseInt(item.amount), 0)
    document.querySelector('.income-amount').innerText = commaSep(totalIncome);
}

function displayExpenses() {
    const items = getItemsLS();
    const totalExpenses = items.filter(item => item.type === '-')
        .reduce((expenses, item) => expenses + parseInt(item.amount), 0)
    document.querySelector('.expense-amount').innerText = commaSep(totalExpenses)
}

function displayTotalBalance() {
    const header = document.querySelector('header');
    const items = getItemsLS();
    let balance = 0;

    for (const item of items) {
        if (item.type === '+') {
            balance += parseInt(item.amount);
        } else if (item.type === '-') {
            balance -= parseInt(item.amount);
        }
    }
    document.querySelector('.total-balance p').innerText = commaSep(balance);

    if (balance <= 0) {
        header.className = 'bg-danger';
    }else{
        header.className = 'bg-dark';
    }
}

function commaSep(int) {
    return int.toLocaleString();
}