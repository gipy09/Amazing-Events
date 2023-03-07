let currentDateEvent = data.currentDate

let eventList = data.events



const card = document.querySelector('#allEvents')
const template = document.querySelector('#template-card').content
const fragment = document.createDocumentFragment()

function previusEvents(lista){
    lista.forEach(item=>{
        if(currentDateEvent>item.date){
            template.querySelector(' .cardimg img').src = item.image
            template.querySelector(' .card-title').textContent= item.name
            template.querySelector('.card-text').textContent= item.description
            template.querySelector(' .card-date').textContent= "Date of Event:  "+item.date
          
            const clone = template.cloneNode(true)
            fragment.appendChild(clone)
            card.appendChild(fragment)
        }
    
    })
}

previusEvents(eventList)






