const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const postsContainer = document.querySelector("#container-eventos");

async function getAllPosts() {
  const response = await fetch(SOUND_URL);

  console.log(response);

  const data = await response.json();

  console.log(data);


  data.map((post) => {

    const article = document.createElement("article");
    const title1 = document.createElement("h2");
    const title2 = document.createElement("h4");
    const body = document.createElement("p");
    const link = document.createElement("a");

    title1.innerText = post.name;
    title2.innerText = post.attractions;
    body.innerText = post.description;
    link.innerText = "reservar ingresso";
    link.setAttribute("href", "#");

    article.appendChild(title1);
    article.appendChild(title2);
    article.appendChild(body);
    article.appendChild(link)

    postsContainer.className = "container d-flex justify-content-center align-items-center flex-wrap"
    article.className = "evento card p-5 m-3"
    link.className = "btn btn-primary"

    postsContainer.appendChild(article);
  });
}

getAllPosts();