var campoNome = document.getElementById("nome");
var campoNascimento = document.getElementById("ano");
var botao = document.getElementById("botao");

var mensagemErroNome = document.getElementById("erro-nome");
var mensagemErroAno = document.getElementById("erro-ano");

var nomeValido = false;
var anoValido = false;

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
    if (ano > anoAtual || ano <= 1902) {
        anoValido = false;
    } else {
        anoValido = true;
    }
    validaAno();
}

botao.onclick = function() {
    if (!nomeValido) {
        validaNome();
    }

    if (!anoValido) {
        validaAno();
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

function validaAno() {
    if (!anoValido) {
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