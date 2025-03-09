//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrayNomes = [];

//* capturar valor
let campoNome = document.querySelector('#amigo');
let listaNomes = document.querySelector('#listaAmigos')
let resultado = document.querySelector('#resultado')


function limparLista(){
    listaNomes.remove(listaNomes)
}

function atualizarListaAmigos(arrayNomes){

    //* Exibe o ultimo nome adicionado
    let ultimoNome = arrayNomes[arrayNomes.length -1]
    listaNomes.innerHTML += `<li>Lista: ${ultimoNome}</li>`
}

function adicionarAmigo(){
    
    //* validação 
    if(campoNome.value == "" || campoNome.value == " ")
    { return alert("por favor, escreva um nome")}
    
    //* adicionar numa lista
    arrayNomes.push(campoNome.value);

    //* limpar campo de entrada
    campoNome.value = "";

    atualizarListaAmigos(arrayNomes)

}

function gerarNumeroAleatorio(tamanhoLista){
    let numeroEscolhido = parseInt(Math.random() * tamanhoLista + 1)
    return numeroEscolhido
}

function sortearAmigo(){
    if(arrayNomes.length == 0) {return alert ("adicione um nome antes")} 
    numeroEscolhido = gerarNumeroAleatorio(arrayNomes.length)
    limparLista(arrayNomes)
    resultado.innerHTML += `<li>O escolhido: ${arrayNomes[numeroEscolhido-1]}</li>`
}