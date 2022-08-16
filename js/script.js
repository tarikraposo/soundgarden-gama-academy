const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const formCadastroEvento = document.getElementById('cadastro-evento')


formCadastroEvento.addEventListener('submit', async (event) => {
    event.preventDefault()
    const inputNome = document.getElementById("nome")
    const inputAtracoes = document.getElementById('atracoes')
    const inputDescricao = document.getElementById('descricao')
    const inputData = document.getElementById('data')
    const inputLotacao = document.getElementById ('lotacao')
    const inputBanner = document.getElementById('banner')

   // alert(inputNome.value)

    const fullDateTime = new Date(inputData.value);

    

    const novoEventoObj = 
    {
        "name": inputNome.value,
        "poster": inputBanner.value,
        "attractions": inputAtracoes.value.split(","),
        "description": inputDescricao.value,
        "scheduled": fullDateTime.toISOString(),
        "number_tickets": inputLotacao.value
    }

    const novoEventoJSON = JSON.stringify(novoEventoObj)


  const resposta = await fetch(SOUND_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: novoEventoJSON
 }).then((response) => {
    return response.json()
 }).then((responseOBJ) => {
    console.log (responseOBJ)
 })
})



// const preencherEvento = (evento) => {
//     document.getElementById('nome').value = evento.name
//     document.getElementById('banner').value = evento.poster
//     document.getElementById('atracoes').value = evento.attractions.join(', ')
//     document.getElementById('data').value = returnDateFormat(evento.scheduled)
//     document.getElementById('descricao').value = evento.description
//     document.getElementById('lotacao').value = evento.number_tickets
// }



