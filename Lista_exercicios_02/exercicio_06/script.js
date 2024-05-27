let nota = document.querySelector("#nota");
let resultadoFinal = document.querySelector("#resultadoFinal");
let btCalcular = document.querySelector("#btCalcular");

function calcularNota(){
    let varNota = (nota.value);

    if(varNota >= 60){
        alert ("Aluno Aprovado");
    }else if((varNota < 60) && (varNota >= 40)){
        alert ("Aluno Precisa de Prova Substitutiva");
    }else{
        alert ("Reprovado");
    }
}

btCalcular.onclick=function(){
    calcularNota();
}