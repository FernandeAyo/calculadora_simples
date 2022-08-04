
function inserir(num) {
    var visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = visor + num;
}

function limpar() {
    document.getElementById('visor').innerHTML = " ";
}

function apagar() {
    var visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = visor.substring(0, visor.length-1);
}

function calcular() {
    var visor = document.getElementById('visor').innerHTML;
    
    //Não sei porque não funciona para deixar o visor vazio quando o valor é undefined
    if(visor == " "){
        document.getElementById('visor').innerHTML = " ";
    } else {
        document.getElementById('visor').innerHTML = eval(visor);
    }
}
