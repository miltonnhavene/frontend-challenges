function mostrarIngredientes() {
    const ingredientes = document.getElementById("ingredientes");
    const instrucoes = document.getElementById("instrucoes");
    ingredientes.classList.toggle("hidden");
    instrucoes.classList.add("hidden");
    if (!ingredientes.classList.contains("hidden")) {
        ingredientes.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function mostrarInstrucoes() {
    const ingredientes = document.getElementById("ingredientes");
    const instrucoes = document.getElementById("instrucoes");
    instrucoes.classList.toggle("hidden");
    ingredientes.classList.add("hidden");
    if (!instrucoes.classList.contains("hidden")) {
        instrucoes.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
