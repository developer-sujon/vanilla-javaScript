//Define UI Elements
const form = document.getElementById('form');
const title = document.getElementsByName('title')[0];
const author = document.getElementsByName('author')[0];
const year = document.getElementsByName('year')[0];
const tableBody = document.querySelector('#table-body');
const clearBookList = document.querySelector('#clearBookList');

//Define Functions

//add Book List
const addBookList = (e) => {
    e.preventDefault();
    if (title.value === '' || author.value === '' || year.value === '') {
        alert('Feild Is Required');
    } else {
        createBookLIstItem(title.value, author.value, year.value);

        saveBookListLocalStorage({
            title: title.value,
            author: author.value,
            year: year.value
        })

        title.value = '';
        author.value = '';
        year.value = '';
    }
}

function createBookLIstItem(title, author, year) {
    const tableRow = createElement('tr');
    const newTitle = createElement('td', title);
    appendElement(newTitle, tableRow);
    const newAuthor = createElement('td', author);
    appendElement(newAuthor, tableRow);
    const newYear = createElement('td', year);
    appendElement(newYear, tableRow);
    const newLink = createElement('a', 'X');
    newLink.setAttribute('href', 'javascript:void(0);');
    appendElement(newLink, tableRow);
    tableBody.appendChild(tableRow);
}

//create Element
function createElement(tagname, text) {
    let element = document.createElement(tagname);
    element.textContent = text ? text : '';
    return element;
};
//append Element
function appendElement(child, parent) {
    return parent.appendChild(child);
};

//remove book
function removeBook(e) {
    if (e.target.getAttribute('href')) {
        e.target.parentElement.remove();
        removeBookLocalStorage(e.target.parentElement)
    }
}

//clear book
function clearBook(e) {
    while (tableBody.firstElementChild) {
        tableBody.removeChild(tableBody.firstElementChild)
    };
    localStorage.clear();
}
//Save Data localStorage
function saveBookListLocalStorage(booksData) {
    let bookListsData;
    if (localStorage.getItem('bookList') == null) {
        bookListsData = [];
    } else {
        bookListsData = JSON.parse(localStorage.getItem('bookList'));
    }

    bookListsData.push(booksData);
    localStorage.setItem('bookList', JSON.stringify(bookListsData));
};

//GET Book localStorage
function getBookListLocalStorage() {
    let bookListsData;
    if (localStorage.getItem('bookList') == null) {
        bookListsData = [];
    } else {
        bookListsData = JSON.parse(localStorage.getItem('bookList'));
    };

    bookListsData.map(book => {
        createBookLIstItem(book.title, book.author, book.year);
    });
};

//Remove Book localStorage
function removeBookLocalStorage(bookItem) {
    let bookListsData;
    if (localStorage.getItem('bookList') == null) {
        bookListsData = [];
    } else {
        bookListsData = JSON.parse(localStorage.getItem('bookList'));
    };

    bookItem.removeChild(bookItem.lastChild);

    [...bookItem.children].forEach(function (book) {
        if (!book.getAttribute('href')) {
            bookListsData.map((singleBook, index) => {
                if (book.textContent.trim() === singleBook.title || book.textContent.trim() === singleBook.author || book.textContent.trim() === singleBook.year) 
                {
                    bookListsData.splice(index, 1);
                }
            })
        }
    });
    localStorage.setItem('bookList', JSON.stringify(bookListsData));
};


//Define Event listener
form.addEventListener('submit', addBookList)
tableBody.addEventListener('click', removeBook)
clearBookList.addEventListener('click', clearBook)
document.addEventListener('DOMContentLoaded', getBookListLocalStorage)