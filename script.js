
function abrirMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("aberto");
}

function pesquisar() {
    const termo = prompt("O que deseja encontrar no site?");

    if (!termo) return;

    const conteudo = document.querySelector("main").innerText;

    if (conteudo.toLowerCase().includes(termo.toLowerCase())) {
        alert("Informação encontrada no conteúdo do site!");
    } else {
        alert("Nenhuma informação encontrada.");
    }
}
