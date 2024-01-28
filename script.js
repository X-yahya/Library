const book_section = document.querySelector(".books-section") ; 
const add = document.querySelector(".add") ; 
const books = document.querySelector(".total") ; 
const completed = document.querySelector(".completed") ; 
const totalPage = document.querySelector(".totalp") ; 


const lib = [] ; 
class Book
{
    constructor(name , author , pages , status)
    {
        this.name = name  ;
        this.author = author  ; 
        this.pages = pages ; 
        this.status = status ; 

    }

}
function displaybook() {
    lib.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const name = document.createElement("p");
        name.innerHTML = `Title : ${book.name}`;

        const author = document.createElement("p");
        author.innerHTML = `Author : ${book.author}`;

        const pages = document.createElement("p");
        pages.innerHTML = `Pages : ${book.pages}`;

        const status = document.createElement("p");
        status.innerHTML = `${book.status}`;
        if (book.status === "read") {
            status.classList.add("read");
        } else if (book.status === "unread") {
            status.classList.add("unread");
        } else {
            status.classList.add("toberead");
        }

        card.append(name, author, pages, status);
        book_section.appendChild(card);
    });
}

add.addEventListener("click",()=>
{
    const book_name = document.getElementById("name").value;
    const book_author = document.getElementById("author").value;
    const book_npages = document.getElementById("pages").value;
    const book_status = document.getElementById("status").value;

   const book = new Book(book_name,book_author,book_npages,book_status) ; 
    lib.push(book);
    displaybook() ; 


    
})
