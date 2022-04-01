// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        const dados = data.results
        console.log(dados);
        dados.forEach(dados => renderizarDadosUsuario(dados));


        console.log(data)
    });

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

    const card = document.querySelector(".card")
    card.style.textAlign = 'center'
    card.style.padding = '12%'
    card.style.display = "flex"
    card.style.flexDirection = 'column'
    card.style.justifyContent = 'center'
    card.style.alignItems = 'center'
    card.style.gap = '20%'

    const picture = document.createElement("img")
    picture.src = dados.picture.large;

    const name = document.createElement("h1")
    name.innerText = dados.name.first + ' ' + dados.name.last;

    const email = document.createElement("h2")
    email.innerText = dados.email;

 
    card.appendChild(picture)
    card.appendChild(name)
    card.appendChild(email)
    console.log(card);


}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.