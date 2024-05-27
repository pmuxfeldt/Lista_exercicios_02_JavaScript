let primNumero = document.querySelector("#primNumero");
let segnNumero = document.querySelector("#segnNumero");

function calcularResultado(){
    let varPrimNumero = String(primNumero.value);
    let varSegnNumero = String(segnNumero.value);

    if(varPrimNumero > varSegnNumero){
        alert("O primeiro número é MAIOR que o segundo");
    } else if(varPrimNumero == varSegnNumero){
        alert("O primeiro número é IGUAL ao segundo");
    } else if(varPrimNumero < varSegnNumero){
        alert("O primeiro número é MENOR ao segundo");
    }
}


btCalcular.onclick=function(){
    calcularResultado();
}