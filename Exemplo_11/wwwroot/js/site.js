function calcularIMC() {
    var formulario = document.getElementById("formulario");
    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var imc = peso / (altura * altura);
    var resposta = document.getElementById("resposta")

    formulario.imc.value = imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById("resposta").innerHTML = "Vixiii. Está baixo do peso!"
    } else if (imc > 18.5 &&
        imc < 24.9) {
        document.getElementById("resposta").innerHTML = "Obaaaaaa está no peso ideal!!!"
    } else if (imc > 25 && imc <
        29.9) {
        document.getElementById("resposta").innerHTML = "Eitaaaa! Está com sobrepeso."
    } else if (imc > 30 && imc <
        34.9) {
        document.getElementById("resposta").innerHTML = "Atenção!!! Está com Obesidade - Nível 1. Procure ajuda de um especialista!"
    } else if (imc > 35 && imc < 39.9) {
        document.getElementById("resposta").innerHTML = "Cuidado!!! Está com Obesidade - Nível 2. Procure ajuda médica!"
    } else if (imc > 40) {
        document.getElementById("resposta").innerHTML = "Preocupante, está com Obesidade - Nível 3. Procure o mais rápido possível ajuda médica!"
    }
}

function resetar() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("imc").value = "";
}