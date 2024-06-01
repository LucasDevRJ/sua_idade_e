var campoNome = document.getElementById("nome");
var campoNascimento = document.getElementById("ano");
var botao = document.getElementById("botao");

var genero = "";

var mensagemErroNome = document.getElementById("erro-nome");
var mensagemErroAno = document.getElementById("erro-ano");
var mensagemErroGenero = document.getElementById("erro-genero");
var divisaoResposta = document.getElementById("divisao-resposta");

var nomeValido = false;
var anoValido = false;
var generoEscolhido = false;

var anoAtual = new Date().getFullYear();

document.body.onload = function() {
    mensagemErroNome.style.visibility = "hidden";
    mensagemErroAno.style.visibility = "hidden";
    mensagemErroGenero.style.visibility = "hidden";
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

    if (!generoEscolhido) {
        validaGenero();
    }

    if (nomeValido && anoValido && generoEscolhido) {
        let ano = campoNascimento.value;
        let idade = anoAtual - ano;

        let p = document.createElement("p");
        let resposta = document.createTextNode(`Olá <strong>${campoNome.value}</strong>! Você é uma pessoa do gênero <strong>${genero}</strong> e tem <strong>${idade}</strong> anos de idade.`);

        p.appendChild(resposta);
        p.classList.add("resposta");
        divisaoResposta.appendChild(p);
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

function validaGenero() {
    let generos = document.getElementsByName("genero");
    let quantidadeGeneros = generos.length;
    for (let i = 0; i < quantidadeGeneros; i++) {
        if (generos[i].checked) {
            mensagemErroGenero.innerHTML = "";
            mensagemErroGenero.style.visibility = "hidden";
            generoEscolhido = true;
            genero = generos[i].value;
            break;
        } else {
            mensagemErroGenero.style.visibility = "visible";
            mensagemErroGenero.innerHTML = "Selecione o seu gênero!";
            mensagemErroGenero.classList.add("mensagem-erro");
            generoEscolhido = false;
        }
    }
}