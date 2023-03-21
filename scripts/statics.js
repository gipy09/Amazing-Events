// const eventList = data.events;

const url = "https://mindhub-xj03.onrender.com/api/amazing";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const eventList = data.events;
    const mayorAsistencia = eventoMayorAsistencia(eventList);
    const menorAsistencia = eventoMenorAsistencia(eventList);
    const mayorCapacidad = eventoMayorCapacidad(eventList);
    pintarEventsStatistics(mayorAsistencia, menorAsistencia, mayorCapacidad);
    upCommingEvents(eventList);
    pastEvents(eventList);
  });

function eventoMayorAsistencia(lista) {
  let asistencias = 0;
  let capacidad = 0;
  let mayorAsistencia = 0;
  let eventoMayorAsis = null;
  lista.forEach((data) => {
    capacidad += data.capacity;
    asistencias += data.assistance;
    let porcentajeMayorAsistencia = (asistencias / capacidad) * 100;
    if (porcentajeMayorAsistencia > mayorAsistencia) {
      mayorAsistencia = porcentajeMayorAsistencia;
      eventoMayorAsis = data;
    }
  });

  return eventoMayorAsis.name;
}

function eventoMenorAsistencia(lista) {
  let asistencias = 0;
  let capacidad = 0;
  let menorAsistencia = Infinity;
  let eventoMenorAsis = null;
  lista.forEach((data) => {
    capacidad += data.capacity;
    asistencias += data.assistance;
    let porcentajeMenorAsistencia = (asistencias / capacidad) * 100;
    if (menorAsistencia > porcentajeMenorAsistencia) {
      menorAsistencia = porcentajeMenorAsistencia;
      eventoMenorAsis = data;
    }
  });

  return eventoMenorAsis.name;
}

function eventoMayorCapacidad(lista) {
  let capacidad = 0;
  let mayorCapacidad = 0;
  let eventoMayorCapacidad = null;
  lista.forEach((data) => {
    capacidad += data.capacity;
    if (capacidad > mayorCapacidad) {
      mayorCapacidad = capacidad;
      eventoMayorCapacidad = data;
    }
  });

  return eventoMayorCapacidad.name;
}

const cardEvents = document.getElementById("detallesEventos");

function pintarEventsStatistics(
  eventoMayorAsis,
  eventoMenorAsis,
  eventoMayorCapacidad
) {
  let eventoCard = "";
  eventoCard += `
      <tr>
        <td>${eventoMayorAsis}</td>
        <td>${eventoMenorAsis}</td>
        <td>${eventoMayorCapacidad}</td>
      </tr>`;
  cardEvents.innerHTML = eventoCard;
}

const card = document.getElementById("categorias");

function upCommingEvents(lista) {
  let string = "";
  const categorias = new Set(lista.map((evento) => evento.category));

  categorias.forEach((categoria) => {
    let listaCat = lista.filter(
      (evento) => evento.category === categoria && evento.estimate !== undefined
    );
    let listaRevenues = listaCat.map((evento) => evento.estimate);
    let revenues = listaRevenues.reduce((acc, ganancias) => acc + ganancias, 0);

    let listaCap = listaCat.map((evento) => evento.capacity);
    let listaAsis = lista.filter(
      (evento) => evento.category === categoria && evento.estimate !== undefined
    );

    let listAsistencia = listaAsis.map((evento) => evento.estimate);
    let sumaCap = listaCap.reduce((acc, capacidad) => acc + capacidad, 0);
    let sumaAsis = listAsistencia.reduce(
      (acc, asistencia) => acc + asistencia,
      0
    );
    let total = (sumaAsis / sumaCap) * 100;

    if (isNaN(total)) {
      total = 0;
    }
    string += `
      <tr>
        <td>${categoria}</td>
        <td>$${revenues}</td>
        <td>${total.toFixed(2)}%</td>
      </tr>`;
  });

  card.innerHTML = string;
}

const cardPast = document.getElementById("categoriasP");

function pastEvents(lista) {
  let string = "";
  const categorias = new Set(lista.map((evento) => evento.category));

  categorias.forEach((categoria) => {
    let listaCat = lista.filter(
      (evento) =>
        evento.category === categoria && evento.assistance !== undefined
    );
    let listaRevenues = listaCat.map((evento) => evento.assistance);
    let revenues = listaRevenues.reduce((acc, ganancias) => acc + ganancias, 0);

    let listaCap = listaCat.map((evento) => evento.capacity);
    let listaAsis = lista.filter(
      (evento) =>
        evento.category === categoria && evento.assistance !== undefined
    );

    let listAsistencia = listaAsis.map((evento) => evento.assistance);
    let sumaCap = listaCap.reduce((acc, capacidad) => acc + capacidad, 0);
    let sumaAsis = listAsistencia.reduce(
      (acc, asistencia) => acc + asistencia,
      0
    );
    let total = (sumaAsis / sumaCap) * 100;

    if (isNaN(total)) {
      total = 0;
    }
    string += `
      <tr>
        <td>${categoria}</td>
        <td>$${revenues}</td>
        <td>${total.toFixed(2)}%</td>
      </tr>`;
  });

  cardPast.innerHTML = string;
}
