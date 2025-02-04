let listaNomes = []; 

function adicionarAmigo() {
    let valorDoCampo = document.querySelector("input").value;
    if (valorDoCampo == "") {
        alert("Por favor, insira um nome.");
    }
    else {
        listaNomes.push(valorDoCampo);
        limparCampo();
        atualizarListaNomes();
    }
}

function atualizarListaNomes() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (let i = 0; i < listaNomes.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaNomes[i];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaNomes.length >= 2) {
        let nomeSegredo = listaNomes[Math.floor(Math.random() * listaNomes.length)];
        document.getElementById("resultado").innerHTML = `Amigo Sorteado: ${nomeSegredo}`;
    }
}

function limparCampo() {
    document.querySelector("input").value = "";
}