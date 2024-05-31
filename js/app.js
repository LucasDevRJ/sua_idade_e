var campoNome = document.getElementById("nome");
var campoNascimento = document.getElementById("ano");

campoNome.onkeyup = function() {
    let nome = campoNome.value;
    if (nome.length == 0) {
        campoNome.classList.remove("campo-valido");
        campoNome.classList.add("campo-invalido");
        alert("DDD");
    } else {
        campoNome.classList.remove("campo-invalido");
        campoNome.classList.add("campo-valido");
    }
}