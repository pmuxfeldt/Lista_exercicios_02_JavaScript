let primeiroValor = document.querySelector("#primeiroValor");
let segundoValor = document.querySelector("#segundoValor");
let btCalcular = document.querySelector("#btCalcular");
let soma = document.querySelector("#soma");
let subtracao = document.querySelector("#subtracao");
let multiplicacao = document.querySelector("#multiplicacao");
let divisao = document.querySelector("#divisao");


function calcular(){
    let varPrimeiroValor = Number(primeiroValor.value);
    let varSegundoValor = Number(segundoValor.value);
    let valorSoma = varPrimeiroValor + varSegundoValor;
    soma.textContent = String(valorSoma); 

    let valorSubtracao = varPrimeiroValor - varSegundoValor;
    subtracao.textContent = String(valorSubtracao);

    let valorMultiplicacao = varPrimeiroValor * varSegundoValor;
    multiplicacao.textContent = String(valorMultiplicacao);

    let valorDivisao = varPrimeiroValor / varSegundoValor;
    divisao.textContent = String(valorDivisao);
}

btCalcular.onclick=function(){
    calcular();
}