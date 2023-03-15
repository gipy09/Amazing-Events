let currentDateEvent = data.currentDate;

let eventList = data.events;

//METODO EL CUAL TOMA COMO REFERENCIA LA CARD YA CREADA EN HTML
const card = document.querySelector("#allEvents");
const template = document.querySelector("#template-card").content;
const fragment = document.createDocumentFragment();
function pintarEventos(lista) {
  if (lista.length == 0) {
    card.innerHTML = "<h2 class='text-center'>No existen eventos</h2>";
  } else {
    card.innerHTML = "";

    lista.forEach((item) => {
      if (currentDateEvent > item.date) {
        template.querySelector(" .cardimg img").src = item.image;
        template.querySelector(" .card-title").textContent = item.name;
        template.querySelector(".card-text").textContent = item.description;
        template.querySelector(" .card-date").textContent =
          "Date of Event:  " + item.date;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
      }
    });
    card.appendChild(fragment);
  }
}

//METODO EL CUAL CREA LAS CATEGORIAS DE FORMA DINAMICA DEPENDIENDO DEL ARRAY QUE SE PASE
const checkboxList = document.getElementById("checkbox-list");
function generarChecks(lista) {
  const categorias = {};
  lista.forEach((item) => {
    const category = item.category;
    if (!categorias[category]) {
      categorias[category] = true;
      const listItem = document.createElement("li");
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "categoria";
      input.value = category;
      label.textContent = category;
      label.appendChild(input);
      listItem.appendChild(label);
      checkboxList.appendChild(listItem);
    }
  });
}

//METODO EL CUAL ESCUCHA EL EVENTO CHANGE PARA LOS CHECKS
const divChecks = document.querySelector("#checks");
divChecks.addEventListener("change", () => {
filtroDoble()
});



//METODO EL CUAL FILTRA LOS EVENTOS DEPENDIENDO DEL CHECK QUE ESTE MARCADO
function filtrarEventos(lista) {
  let checks = Array.from(document.querySelectorAll("input[type='checkbox']"));
  let valores = checks
    .filter((check) => check.checked)
    .map((check) => check.value);
  if (valores.length == 0) {
    return lista;
  } else {
    let eventosFiltrados = lista.filter((elemento) =>
      valores.includes(elemento.category)
    );
    return eventosFiltrados;
  }
}

//EVENT EL CUAL ESCUCHA EL EVENTO POR EL INPUT MEDIANTE KEYUP
const inputSearch = document.querySelector("#search");
inputSearch.addEventListener('keyup',(e)=>{
  filtroDoble()

})

//METODO EL CUAL FILTRA LOS EVENTOS POR EL NOMBRE DEL EVENTO 
function searchEvento(lista, texto) {
  let filteredEvents = lista.filter(elemento=>elemento.name
    .toLowerCase().includes(texto.toLowerCase()))
    return filteredEvents
}

//METODO EL CUAL FILTRA LOS EVENTOS DE MANERA CRUZADA
function filtroDoble(){
  let primerFiltro=searchEvento(eventList, inputSearch.value)
  let segundoFiltro=filtrarEventos(primerFiltro)
  pintarEventos(segundoFiltro)
}

generarChecks(eventList);
pintarEventos(eventList);
