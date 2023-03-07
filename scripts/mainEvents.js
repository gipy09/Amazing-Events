
let eventList = data.events;




//METODO EL CUAL TOMA COMO REFERENCIA LA CARD YA CREADA EN HTML

const card = document.querySelector('#allEvents')
const template = document.querySelector('#template-card').content
const fragment = document.createDocumentFragment()

function verEventos(lista){
  lista.forEach(item=>{
    template.querySelector(' .cardimg img').src = item.image
    template.querySelector(' .card-title').textContent= item.name
    template.querySelector(' .card-text').textContent= item.description
    template.querySelector(' .card-date').textContent= "Date of Event:  "+item.date
    template.querySelector(' .price p').textContent= "Price: "+item.price+"$"
    template.querySelector(' .btn').textContent= 'Add Cart'
  
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    card.appendChild(fragment)
  
  });
  
}
 verEventos(eventList)


//Forma DE MOSTRAR LOS EVENTOS EN LAS CARDS VISTAS EN CLASE
// **PARA QUE FUNCIONE COMENTAR "TEMPLATE"** EN EL HTML

// let contenedorCard= document.getElementById("allEvents")
// let cardHmtml=""

// function traerEventos(){  
// for(const eventos of eventList){
//   cardHmtml+=`
//   <div id="template-card" class="d-flex justify-content-center">
//   <div class="card col-xl-3 col-lg-4 col-md-6 col-sm-12">
//     <div class="cardimg">
//       <img class="card-img-top" src=${eventos.image}/>
//     </div>
//     <div class="card-body">
//       <h5 class="card-title" id="title">${eventos.name}</h5>
//       <p class="card-text">${eventos.description}</p>
//       <p class="card-date">${eventos.date}</p>
//       <div class="price">
//         <p>${eventos.price}</p>
//         <a class="btn">Add Cart</a>
//       </div>
//     </div>
//   </div>
// </div>`

// }
// contenedorCard.innerHTML= cardHmtml
// }
// traerEventos()