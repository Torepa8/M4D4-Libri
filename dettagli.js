const params = new URLSearchParams(window.location.search);
const asin = params.get("asin")
const aggiungialcarrello = 'Aggiungi al carrello'
const nelcarrello = 'Nel carrello'

fetch(`https://striveschool-api.herokuapp.com/books/${asin}`)
    .then(r => r.json())
    .then(bookDetails)


const boxDetails = document.querySelector("#book_dettagli")

function bookDetails(bookD) {

    console.log(bookD.title)

    boxDetails.innerHTML =
        /*html*/`
        <div class="col-8 p-1">
            <div class="card">
                <img src="${bookD.img}" class="w-100 mt-1 object-fit-cover card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title text-truncate">${bookD.title}</p>
                    <p class="card-text">${bookD.price}€</p>                           
                    <a id="add_cart" class="btn btn-primary">Aggiungi al carrello</a>
                    <a id="delete_card" class="btn btn-primary">Non mi interessa</a>
                </div>
            </div>
        </div>`
        const AddCart = document.querySelectorAll('#add_cart')
        AddCart.forEach(bCard => {
            bCard.addEventListener("click", function (event) {
                if (event.target.innerHTML != aggiungialcarrello) {
                    event.target.innerHTML = aggiungialcarrello
                }
                else {
                    event.target.innerHTML = nelcarrello
                }
            })
        })
}
