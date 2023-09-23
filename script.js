//API: https://striveschool-api.herokuapp.com/books

const api = 'https://striveschool-api.herokuapp.com/books?title='
const containerBooks = document.getElementById('book_container')

function searchBooks() {
    const userSearch=document.getElementById('user_search').value
    fetch(api+userSearch)
        .then(risp => risp.json())
        .then(getBooks)
        .catch(error => {
            console.log(error.message)
            alert('Nessuno dato trovato')
        })
}

let allBooks
function getBooks(books) {
    allBooks=books.map((b) => {
        return [b.img,b.title,b.price]
    })
    console.log(allBooks)
    containerBooks.innerHTML=""
    containerBooks.innerHTML = books.map((book) => {
        return /*html*/`
                <div class="col-6 col-md-4 col-lg-3 p-1">
                    <div class="card">
                        <img src="${book.img}" class="w-100 h-pred mt-1 object-fit-cover card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-title">${book.title}</p>
                            <p class="card-text">${book.price}</p>
                            <a href="#" id="add_cart" class="btn btn-primary">Aggiungi al carrello</a>
                        </div>
                    </div>
                </div>`
    }).join("")
}
//carico libri su DOM
searchBooks()
