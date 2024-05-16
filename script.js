const btnClicar = document.querySelector("#btnCriar")
const listaFilmes = document.querySelector("#listaFilmes")
const inputFilme = document.querySelector("#inputFilme")


const filmes = [

    {
        nome: "star wars",
        avaliacao: 10,
        personagens: {
            nome:"Anakin"
        },
        sinopse:"As Guerras Clônicas estão em pleno andamento e Anakin Skywalker mantém um elo de lealdade com Palpatine, ao mesmo tempo em que luta para que seu casamento com Padmé Amidala não seja afetado por esta situação. Seduzido por promessas de poder, Anakin se aproxima cada vez mais de Darth Sidious até se tornar o temível Darth Vader. Juntos eles tramam um plano para aniquilar de uma vez por todas com os cavaleiros jedi."
 
    },
    {
        nome: "up",
        avaliacao: 9,
        sinopse: "lorem ipsum Dolor Sit Ame"
    },
    {
        nome: "Blade Runner",
        avaliacao: 8.5,
        sinopse: "lorem ipsum dolor sit ame"
    }
]

btnClicar.addEventListener("click", function(infosDoEvento){
    infosDoEvento.preventDefault();
    let respostaUsuario = inputFilme.value;

    let novoFilme = document.createElement("li")
    novoFilme.innerText = respostaUsuario

    let btnEditar = document.createElement("button")
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener("click", function(){
        novoFilme.classList.toggle('esconder')
    })
    novoFilme.append(btnEditar)



    listaFilmes.append(btnEditar)

    listaFilmes.append(novoFilme)

    // novoFilme.style.color = "red"
    // btnEditar.classList.toggle('esconder')

    // listaFilmes.append(novoFilme)
    // console.log(infosDoEvento.target.value)
    // console.log(infosDoEvento.target.parentNode)


})


// .append() - adiciona um elemento html dentro de outro
// .createEment() - cria um novo elemento HTML
// .style.propriedadeCSS - muda a propriedade
// .classList.add() - adiciona uma classe ao elemento HTML
// .classList.remove() - remova uma classe do elemento HTML
// .classList.toggle() - liga/desliga uma classe do elemento HTML 

// Create
function adicionarFilme(){
    const filmeNovo ={
        nome: inputFilme.value 
    }
    filmes.unshift(filmeNovo)
    renderizarNaTela()
}
window.onload = renderizarNaTela()


// Read
function renderizarNaTela(){
    listaFilmes.innerText = ""
    filmes.forEach( filme =>{
        let novoFilme = document.createElement("li")
        novoFilme.innerText = filme.nome
        
        let avaliacaoFilme = document.createElement('p')
        avaliacaoFilme.innerText = filme.avaliacao
        
        novoFilme.append(avaliacaoFilme)
        listaFilmes.append(novoFilme)

        listaFilmes.innerHTML = `
        <h1> ${filme.nome}</h1>
        `
    })
}


// Update


// Delete