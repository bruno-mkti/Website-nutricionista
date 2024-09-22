function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!nome || isNaN(peso) || isNaN(altura) || altura === 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso, você deveria melhorar sua alimentação e atividades físicas";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal, muito bem continue assim com bons hábitos👏";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Acima do peso, você deveria cuidar melhor da sua alimentação e atividades físicas";
    } else if (imc >= 30 && imc < 40) {
        classificacao = "Obeso, você deveria cuidar melhor da sua alimentação e atividades físicas";
    } else {
        classificacao = "Obesidade grave, você deveria cuidar melhor da sua alimentação e atividades físicas";
    }

    document.getElementById('resultado').innerText = `${nome}, seu IMC é ${imc.toFixed(2)}: ${classificacao}`;
}
