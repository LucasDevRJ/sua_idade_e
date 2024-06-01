var campoNome = document.getElementById("nome");
var campoNascimento = document.getElementById("ano");
var botao = document.getElementById("botao");

var mensagemErroNome = document.getElementById("erro-nome");
var mensagemErroAno = document.getElementById("erro-ano");

var nomeValido = false;

console.log(botao)

document.body.onload = function() {
    mensagemErroNome.style.visibility = "hidden";
    mensagemErroAno.style.visibility = "hidden";
}

campoNome.onkeyup = function() {
    let nome = campoNome.value;
    if (nome.length == 0) {
        nomeValido = false;
    } else {
        nomeValido = true;
    }
    validaNome();
}

campoNascimento.onkeyup = function() {
    let ano = campoNascimento.value;
    let anoAtual = new Date().getFullYear();

    ano = parseInt(ano);
    if (isNaN(ano)) {
        campoNascimento.classList.remove("campo-valido");
        campoNascimento.classList.add("campo-invalido");
        mensagemErroAno.style.visibility = "visible";
        mensagemErroAno.innerHTML = "Digite somente números!";
        mensagemErroAno.classList.add("mensagem-erro");
        console.log(ano > anoAtual)
    } else if (ano > anoAtual || ano <= 1902) {
        campoNascimento.classList.remove("campo-valido");
        campoNascimento.classList.add("campo-invalido");
        mensagemErroAno.style.visibility = "visible";
        mensagemErroAno.innerHTML = "Digite um ano válido!";
        mensagemErroAno.classList.add("mensagem-erro");
    } else {
        campoNascimento.classList.remove("campo-valido");
        campoNascimento.classList.add("campo-valido");
        mensagemErroAno.innerHTML = "";
        mensagemErroAno.style.visibility = "hidden";
        mensagemErroAno.classList.remove("mensagem-erro");
        mensagemErroAno.classList.add("campo-invalido");
    }
}

botao.onclick = function() {
    if (!nomeValido) {
        validaNome();
    }
}

function validaNome() {
    if (!nomeValido) {
        campoNome.classList.remove("campo-valido");
        campoNome.classList.add("campo-invalido");
        mensagemErroNome.classList.add("mensagem-erro");
        mensagemErroNome.style.visibility = "visible";
        mensagemErroNome.innerHTML = "Digite seu nome!";
    } else {        
        mensagemErroNome.style.visibility = "hidden";
        mensagemErroNome.innerHTML = "";
        campoNome.classList.remove("campo-invalido");
        campoNome.classList.add("campo-valido");
    }
}