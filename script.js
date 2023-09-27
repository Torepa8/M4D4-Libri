//API: https://striveschool-api.herokuapp.com/books

const api = 'https://striveschool-api.herokuapp.com/books?title='
const containerBooks = document.getElementById('book_container')
let cardSelected
const aggiungialcarrello = 'Aggiungi al carrello'
const nelcarrello = 'Nel carrello'

function updateCardSelected(selectedBook) {
    for (const sB of selectedBook) {
        cardSelected.push(sB)
    }
}

//fx per caricamento libri
function searchBooks() {
    const userSearch = document.getElementById('user_search').value
    fetch(api + userSearch)
        .then(risp => risp.json())
        .then(getBooks)
        .catch(error => {
            console.log(error.message)
            alert('Nessuno dato trovato')
        })
}

let allBooks
function getBooks(books) {
    allBooks = books.map((b) => {
        return [b.title, b.img, b.price]
    })
    console.log(books)
    containerBooks.innerHTML = books.map((book) => {
        return /*html*/`
        <div class="col-6 col-md-4 col-lg-3 p-1">
        <a href="dettagli.html?asin=${book.asin}">
            <div class="card">
                <img src="${book.img}" class="w-100 h-pred mt-1 object-fit-cover card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title text-truncate">${book.title}</p>
                    <p class="card-text">${book.price}€</p>                           
                    <a id="add_cart" class="btn btn-primary">Aggiungi al carrello</a>
                    <a id="delete_card" class="btn btn-primary">Non mi interessa</a>
                </div>
            </div>
        </a>
        </div>`
    }).join("")
    const allAddCart = document.querySelectorAll('#add_cart')
    allAddCart.forEach(buttCard => {
        buttCard.addEventListener("click", function (event) {
            if (event.target.innerHTML != aggiungialcarrello) {
                event.target.innerHTML = aggiungialcarrello
            }
            else {
                event.target.innerHTML = nelcarrello
            }
        })
    })
    // console.log(allAddCart[3])
    // alert('OK')
}


//carico libri su DOM all'avvio
searchBooks()


