const book_section = document.querySelector(".books-section");
const add = document.querySelector(".add");
const books = document.querySelector(".total");
const completed = document.querySelector(".completed");
const totalPage = document.querySelector(".totalp");
const pages_read = document.querySelector(".pread") ;
const show_diag = document.querySelector(".addb");
const diag = document.getElementById("favDialog");
const lib = [];

class Book {
  constructor(name, author, pages, pages_read,status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.pages_read = pages_read ;
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
      const pages_read = document.createElement("p") ; 
      const status = document.createElement("p");
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => showEditDialog(book));
     
      name.textContent = `${book.name}`;
      author.textContent = `Author: ${book.author}`;
      pages.textContent = `Pages: ${book.pages}`;
      pages_read.textContent = `Pages Read: ${book.pages_read}` ;
      status.textContent = `${book.status}`;
  
      if (book.status === "read") {
        status.classList.add("read"); 
      } else if (book.status === "reading") {
        status.classList.add("reading"); 
      } else if (book.status === "to be read") {
        status.classList.add("toberead"); 
      }
  
      card.appendChild(name);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(pages_read) ;
      card.appendChild(status);
      card.appendChild(editButton);
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
  totalPage.innerHTML = totalPages;
}

show_diag.addEventListener("click", () => {
  diag.showModal();
});

add.addEventListener("click", (event) => {
  event.preventDefault();

  const book_name = document.getElementById("name").value;
  const book_author = document.getElementById("author").value;
  const book_pages = document.getElementById("pages").value;
  const pages_read = document.getElementById("pread").value  ;
  const book_status = document.getElementById("status").value;
  const book = new Book(book_name, book_author, book_pages, pages_read,book_status);
  lib.push(book);
  diag.close();
  displaybook();

});

const editDialog = document.getElementById("editDialog");
const editForm = document.getElementById("editForm");

function showEditDialog(book) {
    const editIndex = lib.indexOf(book);
    const name = document.querySelector(".editBook");
    name.innerHTML = `${book.name}` ;
    

    document.getElementById("editIndex").value = editIndex;
    document.getElementById("editStatus").value = book.status;
    document.getElementById("pages_R").value = book.pages_read ; 
    editDialog.showModal();
}

editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const editIndex = parseInt(document.getElementById("editIndex").value, 10);
    const newStatus = document.getElementById("editStatus").value;
    const newPagesRead = document.getElementById("pages_R").value  ; 
    if (editIndex >= 0 && editIndex < lib.length) {
        lib[editIndex].status = newStatus;
        lib[editIndex].pages_read = newPagesRead ; 
        editDialog.close();
        displaybook();
    }
});


