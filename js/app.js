var campoNome = document.getElementById("nome");
var campoNascimento = document.getElementById("ano");
var mensagemErroNome = document.getElementById("erro-nome");
var mensagemErroAno = document.getElementById("erro-ano");

document.body.onload = function() {
    mensagemErroNome.style.visibility = "hidden";
    mensagemErroAno.style.visibility = "hidden";
}

campoNome.onkeyup = function() {
    let nome = campoNome.value;
    if (nome.length == 0) {
        campoNome.classList.remove("campo-valido");
        campoNome.classList.add("campo-invalido");
        mensagemErroNome.classList.add("mensagem-erro");
        mensagemErroNome.style.visibility = "visible";
        mensagemErroNome.innerHTML = "Digite seu nome!";
    } else {
        campoNome.classList.remove("campo-invalido");
        campoNome.classList.add("campo-valido");
    }
}

campoNascimento.onkeyup = function() {
    let ano = campoNascimento.value;
    if (isNaN(ano)) {
        mensagemErroAno.style.visibility = "visible";
        mensagemErroAno.innerHTML = "Digite somente números!";
        mensagemErroAno.classList.add("mensagem-erro");
    }
}