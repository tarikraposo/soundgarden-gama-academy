const url = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

const findID = () => {
    // pega url da página
    const urlID = new URL(window.location.href);
    //separando parametro id
    const id = urlID.searchParams.get('id');
    // retorna somente o id
    return id;
}

const formCadastroReserva = document.getElementById('cadastro-reserva')
const inputID = document.getElementById("event-id").value = findID()

formCadastroReserva.addEventListener("submit", async (event) => {
    //evitar que a página seja recarregada
    event.preventDefault();
    const inputNome = document.getElementById("nome-reserva");
    const inputEmail = document.getElementById("email");
    const inputTickets = document.getElementById("number-tickets");
    


    // criando objeto com os dados do evento
    const postContent = {
        "owner_name": inputNome.value,
        "owner_email": inputEmail.value,
        "number_tickets": inputTickets.value,
        "event_id": inputID
    }
    
    const postJson = JSON.stringify(postContent)

    const fetchResultado = await fetch("https://xp41-soundgarden-api.herokuapp.com/bookings", {
        method: 'POST',
        body: postJson,
        headers: {
            "Content-type": "application/json"
        }
        })
        .then(function (response) {
          if (response.status == 201){
            window.alert("Reserva concluída.")
            return console.log(response.json())
          }
          else
            window.alert("Por favor, tente novamente.")
    })
      .catch(function (resposta) {
          return console.log(resposta.message)
      })
})