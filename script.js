const book_section = document.querySelector(".books-section");
const add = document.querySelector(".add");
const books = document.querySelector(".total");
const completed = document.querySelector(".completed");
const totalPage = document.querySelector(".totalp");
const pages_read = document.querySelector(".pread") ;
const show_diag = document.querySelector(".addb");
const diag = document.getElementById("favDialog");
const edit = document.getElementById("editBook") ; 
const lib = [];

class Book {
  constructor(name, author, pages,status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    // this.pages_read = pages_read ;
    this.status = status;
  }
}
function displaybook() {
    book_section.innerHTML = "";
    let total = 0;
    let completedBooks = 0;
    let totalPages = 0;
    lib.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("book-card");
      const name = document.createElement("h6");
      name.classList.add("name") ;
      const author = document.createElement("p");
      const pages = document.createElement("p");
     
      const status = document.createElement("p");
  
      name.textContent = `${book.name}`;
      author.textContent = `Author: ${book.author}`;
      pages.textContent = `Pages: ${book.pages}`;

      status.textContent = `${book.status}`;
  
      if (book.status === "read") {
        status.classList.add("read"); 
      } else if (book.status === "reading") {
        status.classList.add("unread"); 
      } else if (book.status === "to be read") {
        status.classList.add("toberead"); 
      }
  
      card.appendChild(name);
      card.appendChild(author);
      card.appendChild(pages);

      card.appendChild(status);
      book_section.appendChild(card);
      total++;
        if (book.status === "read") {
      completedBooks++;
    }
     totalPages += Number(book.pages);
     

  
  });

  updateStats(total, completedBooks, totalPages);
    };
  

function updateStats(total, completedBooks, totalPages) {
  books.textContent = total;
  completed.textContent = completedBooks;
  totalPage.textContent = totalPages;


}

show_diag.addEventListener("click", () => {
  diag.showModal();
});

add.addEventListener("click", (event) => {
  event.preventDefault();

  const book_name = document.getElementById("name").value;
  const book_author = document.getElementById("author").value;
  const book_pages = document.getElementById("pages").value;

  const book_status = document.getElementById("status").value;
  const book = new Book(book_name, book_author, book_pages,book_status);
  lib.push(book);
  diag.close();
  displaybook();

});



