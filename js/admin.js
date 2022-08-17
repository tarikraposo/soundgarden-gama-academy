const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const tableAdmin = document.querySelector("#tab-eventos");

function parseDate(dateTime) {
  dateTime = dateTime.split(/[\s/:]+/)
  return new Date(dateTime[2], (dateTime[1] - 1), dateTime[0], dateTime[3], dateTime[4]);
}

function returnDateFormat(dateFormat) {
  const date = new Date(dateFormat)
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}

async function getAllPosts() {
  const response = await fetch(SOUND_URL);

  console.log(response);

  const data = await response.json();

  console.log(data);

  data.map((post) => {

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const tdData = document.createElement("td");
    const tdEvento = document.createElement("td");
    const tdAtracoes = document.createElement("td");
    const linkReservas = document.createElement("a")
    const linkEditar = document.createElement("a")
    const linkExcluir = document.createElement("a")

    th.innerText = post._id;
    tdData.innerText = returnDateFormat(post.scheduled);
    tdEvento.innerText = post.name;
    tdAtracoes.innerText = post.attractions;
    linkReservas.innerText = "ver reservas"
    linkReservas.setAttribute("href", "#");
    linkEditar.innerText= "editar"
    linkEditar.setAttribute ("href", "#");
    linkExcluir.innerText="excluir"
    linkExcluir.setAttribute("href", "#");

    tr.appendChild(th);
    tr.appendChild(tdData);
    tr.appendChild(tdEvento);
    tr.appendChild(tdAtracoes)
    tr.appendChild(linkReservas)
    tr.appendChild(linkEditar)
    tr.appendChild(linkExcluir)

    th.scope = "row"
    linkReservas.className = "btn btn-dark"
    linkEditar.className = "btn btn-secondary"
    linkExcluir.className = "btn btn-danger"
    tableAdmin.appendChild(tr);
  });
}

getAllPosts();