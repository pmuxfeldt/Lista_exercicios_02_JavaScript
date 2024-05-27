let primNumero = document.querySelector("#primNumero");

function calcularResultado(){
    let varPrimNumero = String(primNumero.value);

    let varResultado = (varPrimNumero % varPrimNumero);

    if(varResultado == 0){
        alert("O número é PAR");
    } else if(varPrimNumero == varSegnNumero){
        alert("O primeiro número é IMPAR");
    }
}


btCalcular.onclick=function(){
    calcularResultado();
}