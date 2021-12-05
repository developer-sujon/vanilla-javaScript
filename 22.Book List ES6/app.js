// Book Class
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBook() {
        const books = Store.getBook();
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const bookList = document.querySelector('#bookList');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td><a href="javascript:void(0)" class="detale">X</a></td>
        `;
        bookList.appendChild(row);
    }
    static clearFields(field) {
        field.elements['title'].value = '';
        field.elements['author'].value = '';
        field.elements['year'].value = '';
    }
    static showMessage(message, className) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(message));
        div.className = `alert ${className} my-1`;
        const col = document.querySelector('.col');
        const form = document.querySelector('#bookForm');
        col.insertBefore(div, form);

        setTimeout(() => div.remove(), 3000)
    }
}

// Store Book: Handles Storage
class Store {
    static getBook() {
        let books;
        if (localStorage.getItem('bookList') == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('bookList'))
        }
        return books;
    }
    static addBook(book) {
        const books = Store.getBook();
        books.push(book);
        localStorage.setItem('bookList', JSON.stringify(books))
    }
    static removeBook(year) {
        const books = Store.getBook();
        books.forEach((book, index) => {
            if (book.year == year) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('bookList', JSON.stringify(books))
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', () => UI.displayBook())

// Event: Add Books
document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fieldData = {
        title: this.elements['title'].value,
        author: this.elements['author'].value,
        year: this.elements['year'].value,
    };

    if (fieldData.title == '' || fieldData.author == '' || fieldData.year == '') {
        //show error Message
        UI.showMessage('All Fields Required', 'alert-danger');
    } else {
        //Book Object
        const book = new Book(fieldData.title, fieldData.author, fieldData.year);

        //add book 
        UI.addBookToList(book);

        //show success Message
        UI.showMessage('Added Book Successfully', 'alert-success');

        //Clear Input Fields
        UI.clearFields(this);

        //Add Book localStorage
        Store.addBook(book)

    }

})

// Event: Remove a Book
document.getElementById('bookList').addEventListener('click', function (e) {
    if (e.target.classList.contains('detale')) {
        e.target.parentElement.parentElement.remove();

        //show Delete Message
        UI.showMessage('Book Delete Successfully', 'alert-success');
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    }
})