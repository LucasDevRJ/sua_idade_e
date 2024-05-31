var campoNome = document.getElementById("nome");
var campoNascimento = document.getElementById("ano");

campoNome.onkeyup = function() {
    let nome = campoNome.value;
    if (nome.length == 0) {
        var mensagemErro = document.getElementById("erro-nome");
        var p = document.createElement("p");
        var texto = document.createTextNode("Digite seu nome!");
        p.appendChild(texto);
        mensagemErro.appendChild(p);

        p.classList.add("mensagem-erro");
        campoNome.classList.remove("campo-valido");
        campoNome.classList.add("campo-invalido");
        alert("DDD");
    } else {
        campoNome.classList.remove("campo-invalido");
        campoNome.classList.add("campo-valido");
    }
}
