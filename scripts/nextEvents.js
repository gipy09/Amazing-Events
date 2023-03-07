
let currentDateEvent = data.currentDate;

let eventList = data.events;


const card = document.querySelector('#allEvents')
const template = document.querySelector('#template-card').content
const fragment = document.createDocumentFragment()

function futureEvents(lista){
    lista.forEach(item=>{
        if(currentDateEvent<item.date){
            template.querySelector(' .cardimg img').src = item.image
            template.querySelector(' .card-title').textContent= item.name
            template.querySelector(' .card-text').textContent= item.description
            template.querySelector(' .card-date').textContent= "Date of Event:  "+item.date
            template.querySelector(' .price p').textContent= "Price: "+item.price+"$"
            template.querySelector(' .btn').textContent= 'Add Cart'
          
            const clone = template.cloneNode(true)
            fragment.appendChild(clone)
            card.appendChild(fragment)
        }
    
    })
}
futureEvents(eventList)









