
import {movies} from "./movies.js";

let contenedorCard = document.querySelector(".contenedor-card");
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
// const boton = document.getElementById('boton');
let contenedor = document.getElementById('pruebaDelModal');

movies.forEach((produc) => {
    const { Name, Image, id } = produc;
    templateCard.querySelector('h5').textContent = Name
    templateCard.querySelector('img').setAttribute('src', Image);
    templateCard.querySelector('button').setAttribute('id', id)
    const otraTarjeta = templateCard.cloneNode(true)
    fragment.appendChild(otraTarjeta);

});
items.appendChild(fragment);

//Modal---<<<

items.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.classList.contains('btn')) {

        let peliculas = (e.srcElement.id);

        data.forEach(item => {
            const { id, Name, Image, Description } = item;

            if (peliculas == id) {
                contenedor.innerHTML = `
                   <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">${Name}</h5>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                   <center>
                       <img class="img3" src="${Image}" alt="">
                   </center>
                   <p>${Description}</p>
               </div>
                   `
            }
        })

    }
})