function Book(title, author, isban) {
    this.title = title;
    this.author = author;
    this.isban = isban;
}

function bookUI() {};

bookUI.prototype.insertBook = function(book) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isban}</td><td><button class="btn btn-close"></button></td>`;
    document.querySelector('table tbody').insertAdjacentElement('beforeend', row);
}

bookUI.prototype.clearFields = function(arr) {
    arr.forEach(ele => ele.value = '');
}

document.querySelector('.add-book').addEventListener('click', submitBook);

function submitBook(e) {
    const title = document.querySelector('#book-title'),
    author = document.querySelector('#author'),
    isban = document.querySelector('#isban');

    const book = new Book(title.value, author.value, isban.value);

    const ui = new bookUI();

    if ((title.value !== '' && author.value !== '') && isban.value !== '') {
        ui.insertBook(book);
        ui.clearFields([title, author, isban]);
    }

    e.preventDefault();
}