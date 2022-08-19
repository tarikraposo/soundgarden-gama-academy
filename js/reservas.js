const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

const tableAdmin = document.querySelector("#tab-reservas");

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

  data.map((post,index) => {

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const tdEvento = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdTickets = document.createElement("td");

    
      
    th.innerText = index +1 ;
    tdEvento.innerText = post.owner_name;
    tdEmail.innerText = post.owner_email;
    tdTickets.innerText = post.number_tickets;

    //`"https://xp41-soundgarden-api.herokuapp.com/events/:${post._id}"`
  
    tr.appendChild(th);
    tr.appendChild(tdEvento);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTickets)
    th.scope = "row";
    //linkExcluir.style = "margin: 5px";
    tableAdmin.appendChild(tr);
  });
}

getAllPosts();