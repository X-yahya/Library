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

function displaybook()
{
    const card = document.createElement("div") ;
    const name = document.createElement("p") ;
    const author = document.createElement("p");
    const pages = document.createElement("p") ; 
    const status = document.createElement("p") ;
    lib.forEach((book)=>{  
        name.innerHTML = book.name ;
        author.innerHTML = book.author ; 
        pages.innerHTML = book.pages ; 
        status.innerHTML = book.status ; 
        card.append(name , author , pages,status) ;
        book_section.appendChild(card); 
    })
    
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

