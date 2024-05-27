let pessoasComerao = document.querySelector("#pessoasComerao");
let queijo = document.querySelector("#queijo");
let ovos = document.querySelector("#ovos");

function calcularIngredientes(){
    let quantQueijo = (pessoasComerao.value * 50);
    queijo.textContent = String(quantQueijo);

    let quantOvos = (pessoasComerao.value * 2);
    ovos.textContent = String(quantOvos);
}

btCalcular.onclick=function(){
    calcularIngredientes();
}