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

const preencherEvento = (evento) => {
    document.getElementById('id-evento').value = evento._id
    document.getElementById('data-evento').value = evento.scheduled
    document.getElementById('nome-evento').value = evento.name
    document.getElementById('atracao-evento').value = evento.attractions
}


