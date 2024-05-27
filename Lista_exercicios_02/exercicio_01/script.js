let cotacaoDolar = document.querySelector("#cotacaoDolar");
let btCalcular = document.querySelector("#btCalcular");
let reajuste1porcento = document.querySelector("#reajuste1porcento");
let reajuste2porcento = document.querySelector("#reajuste2porcento");
let reajuste5porcento = document.querySelector("#reajuste5porcento");
let reajuste10porcento = document.querySelector("#reajuste10porcento");

function calcularCotacao(){
    let valorDolar = Number(cotacaoDolar.value);
    let calculoUmPorcento = (valorDolar / 100 );
    let varUmPorcento = calculoUmPorcento + valorDolar;
    reajuste1porcento.textContent = String(varUmPorcento);

    let varDoisPorcento = (calculoUmPorcento * 2 ) + valorDolar;
    reajuste2porcento.textContent = String(varDoisPorcento);

    let varCincoPorcento = (calculoUmPorcento * 5 ) + valorDolar;
    reajuste5porcento.textContent = String(varCincoPorcento);

    let varDezPorcento = (calculoUmPorcento * 10 ) + valorDolar;
    reajuste10porcento.textContent = String(varDezPorcento);
}

btCalcular.onclick=function(){
    calcularCotacao();
}