class Book {
  #title;
  #author;
  #publishDate;
  constructor(title, author = "none", publishDate = "none") {
    this.#title = title;
    this.#author = author;
    this.#publishDate = publishDate;
  }
  showDetails() {
    return `Title:${this.#title}, Author: ${this.#author}, Publish date: ${
      this.#publishDate
    }`;
  }
}
class Library {
  #booksCollection;
  constructor() {
    this.#booksCollection = new Map();
  }
  init() {
    document
      .getElementById("addBook")
      .addEventListener("click", () => this.#addBook());
    document
      .getElementById("searchBook")
      .addEventListener("click", () => this.#searchBook());
  }
  #addBook() {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const bookDate = document.getElementById("bookDate").value;

    const book = new Book(title, author, bookDate);
    this.#booksCollection.set(title, book);

    alert("Book has been added to a collection.");
  }
  #searchBook() {
    const bookTitle = document.getElementById("searchTitle").value;
    const book = this.#booksCollection.get(bookTitle);
    const result = document.getElementById("searchResult");
    console.log(book);
    if (book) {
      result.textContent = book.showDetails();
    } else {
      result.textContent = "We don't have searched book in our collection";
    }
  }
}
const library = new Library();
library.init();
