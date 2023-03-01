import { data } from "./data.js";

let currentDateEvent = data.currentDate;

let eventList = data.events;
let allEvent = [];

// const ejemplo =document.getElementById("allEvents")

const eventos = {
    id: Number,
    image: String,
    name: String,
    date: Date,
    description: String,
    category: "Food Fair",
    place: String,
    capacity: Number,
    assistance: Number,
    price: Number,
  };
//obtener todos los eventos
// for (let i = 0; i < eventList.length; i++) {
//   allEvent = eventList[i];
//   console.log(allEvent);

// }
const eventContainer = document.getElementById("allEvents");

for (const event of eventList) {
  const eventCard = document.createElement("div");
  eventCard.classList.add("card");
  eventCard.classList.add("col-xl-3")
  eventCard.classList.add("col-lg-4")
  eventCard.classList.add("col-md-6")
  eventCard.classList.add("col-sm-12")

  const imageCont = document.createElement("div");
  imageCont.classList.add("cardImg")
  const image = document.createElement('img')
  image.classList.add("card-img-top")
  image.src = event.image;
  image.alt = event.name;
  imageCont.appendChild(image); // Agregar imagen al div cardImg
  eventCard.appendChild(imageCont); // Agregar div cardImg al eventCard


  const card_body = document.createElement('div')
  card_body.classList.add("card-body")
  const name = document.createElement("h5");
  name.classList.add("card-title")
  name.textContent = event.name;
  card_body.appendChild(name)
  eventCard.appendChild(card_body);

  const description = document.createElement("p");
  description.classList.add("card-text")
  description.textContent = event.description;
  card_body.appendChild(description)
  eventCard.appendChild(card_body);


  const date = document.createElement("p");
  date.textContent = `${event.date}`;
  card_body.appendChild(date)
  eventCard.appendChild(card_body);

  const place = document.createElement("p");
  place.textContent = `Place: ${event.place}`;
  card_body.appendChild(place)
  eventCard.appendChild(card_body);

  const priceCont =document.createElement("div")
  priceCont.classList.add("price")
  const price = document.createElement("p");
  price.textContent = `Price: ${event.price}`;
  const button = document.createElement("a")
  button.classList.add("btn")
  button.textContent= `Add Cart`
  priceCont.appendChild(price);
  priceCont.appendChild(button);
  eventCard.appendChild(priceCont);

 eventContainer.appendChild(eventCard);
}
//obtener eventos del dia
// let mainEvent = [];
// for (let i = 0; i < eventList.length; i++) {
//     if( currentDateEvent == eventList[i].date ){
//          mainEvent = eventList[i]
//       console.log(mainEvent)
//     }
//  }

// const eventos = {
//   id: 1,
//   image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
//   name: "Collectivities Party",
//   date: "2021-12-12",
//   description:
//     "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
//   category: "Food Fair",
//   place: "Room",
//   capacity: 45000,
//   assistance: 42756,
//   price: 5,
// };

// console.log(eventos.name)
// console.log(eventos.image)
// console.log(eventos.description)
// console.log(eventos.category)
// console.log(eventos.price)
// console.log("keys");
// console.log(Object.keys(eventos));
// console.log("values");
// console.log(Object.values(eventos));
// console.log("entries");
// console.log(Object.entries(eventos));

// let eventosList = [
//   eventos.id,
//   eventos.name,
//   eventos.date,
//   eventos.description,
//   eventos.place,
//   eventos.capacity,
//   eventos.assistance,
//   eventos.price,
// ];
// console.log(eventos)
// //CANTIDAD DE INDICES
// console.log(eventosList.length)
