// const findID = () => {
//     const url = new URL (window.location.href);
//     const id = url.searchParams.get('id')

//     return id;
// }

// const exibirDetalhesEvento = async () => {
//     const dadosEvento = await fetch('https://xp41-soundgarden-api.herokuapp.com/events'+findID(),{
//         method: "GET",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then((response)=> response.json());

//     console.log(dadosEvento);
// }

// exibirDetalhesEvento();