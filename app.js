//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = []; 

function adicionarAmigo() {
    let valorDoCampo = document.querySelector("input").value;
    if (valorDoCampo == "") {
        alert("Por favor, insira um nome.");
    }
    else {
        nomes.push(valorDoCampo);
        limparCampo();
    }
}

function limparCampo() {
    document.querySelector("input").value = "";
}