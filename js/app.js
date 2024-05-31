var campoNome = document.getElementById("nome");

campoNome.onkeyup = function() {
    let nome = campoNome.value;
    if (nome.length == 0) {
        alert("Digite seu nome!")
    }
}