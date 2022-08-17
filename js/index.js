const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const indexEventos = document.querySelector("#index-eventos");

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
    const tresEventos = data.slice(0, 3);
    console.log(tresEventos);


    tresEventos.map((post) => {

    const article = document.createElement("article");
    const title1 = document.createElement("h2");
    const title2 = document.createElement("h4");
    const body = document.createElement("p");
    const link = document.createElement("a");

    title1.innerText = `${post.name} ${returnDateFormat(post.scheduled)}`;
    title2.innerText = post.attractions.join(",");
    body.innerText = post.description;
    link.innerText = "reservar ingresso";
    link.setAttribute("href", "#");

    article.appendChild(title1);
    article.appendChild(title2);
    article.appendChild(body);
    article.appendChild(link)

    indexEventos.className = "container d-flex justify-content-center align-items-center flex-wrap"
    article.className = "evento card p-5 m-3"
    link.className = "btn btn-primary"

    indexEventos.appendChild(article);
  });

}
getAllPosts();

// Acessa a array e seleciona quais ítens quer carregar
