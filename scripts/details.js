const url = "https://mindhub-xj03.onrender.com/api/amazing";

fetch(url)
.then((response)=> response.json())
.then((data)=>{
    const eventList=data.events
    const currentDate=data.currentDate

    const queryString=location.search

const params = new URLSearchParams(queryString)

const id= params.get("id")

const evento = eventList.find(evento=> evento._id == id)


const eventoSelect= document.querySelector("#details")
const template = document.querySelector("#boxdetails").content
const fragment = document.createDocumentFragment();

eventoSelect.innerHTML="";
template.querySelector(".product img").src=evento.image
template.querySelector(".descProd .toc h2").textContent=evento.name
template.querySelector(".descProd .toc .description").textContent=evento.description
template.querySelector(".descProd .toc .price").textContent="Price:"+"$"+evento.price
template.querySelector(".descProd .toc .date").textContent=evento.date
template.querySelector(".btn").textContent="Buy"

fragment.appendChild(template)

eventoSelect.appendChild(fragment)

})
//METODO EL CUAL MUESTRA EL EVENTO EN DETAILS








