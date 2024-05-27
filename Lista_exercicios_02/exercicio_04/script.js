let selecaoPrimSabor = document.querySelector("#selecaoPrimSabor");
let selecaoSegnSabor = document.querySelector("#selecaoSegnSabor");
let selecaoTercSabor = document.querySelector("#selecaoTercSabor");
let selecaoQuartSabor = document.querySelector("#selecaoQuartSabor");
let quantRefrigerante = document.querySelector("#quantRefrigerante");
let valorTotalPagar = document.querySelector("#valorTotalPagar");
let mostragemUm = document.querySelector("#mostragemUm");
let mostragemDois = document.querySelector("#mostragemDois");
let mostragemTres = document.querySelector("#mostragemTres");
let mostragemQuatro = document.querySelector("#mostragemQuatro");

function calcularValor(){
    ///Calculo Valor
    let varQuantRefri = Number(quantRefrigerante.value);
    let valorTotal = ((varQuantRefri * 7) + (12 * 4));

    valorTotalPagar.textContent = String(valorTotal);

    ///Mostrar sabores
    let varPrimSabor = String(selecaoPrimSabor.value);
    let varSegnSabor = String(selecaoSegnSabor.value);
    let varTercSabor = String(selecaoTercSabor.value);
    let varQuartSabor = String(selecaoQuartSabor.value);

    mostragemUm.textContent = (varPrimSabor);
    mostragemDois.textContent = (varSegnSabor);
    mostragemTres.textContent = (varTercSabor);
    mostragemQuatro.textContent = (varQuartSabor);
}


btCalcular.onclick=function(){
    calcularValor();
}