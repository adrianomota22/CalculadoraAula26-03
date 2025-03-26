function somar() {
    let numero1 = parseFloat(document.getElementById("Numero1").value);
    let numero2 = parseFloat(document.getElementById("Numero2").value);

    let resultado = numero1 + numero2;

    document.getElementById('Resultado'), innertext = resultado;
}

function dividir() {
    let numero1 = parseFloat(document.getElementById("Numero1").value);
    let numero2 = parseFloat(document.getElementById("Numero2").value);

    if (numero == 0) {
        document.getElementbyId('resultado'), innertext = "divisão por zero.";
    } else {
        let resultado = numero1 / nuemero2;
        document.getElementById('resultado').innertext = resultado;
    }


    let resultado = numero1 / numero2;
    document.getElementById('Resultado'), innertext = resultado;
}
