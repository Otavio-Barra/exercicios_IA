// Calculadora de IMC (Índice de Massa Corporal)
// Crie um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros, e calcula o IMC.
// Em seguida, classifique o resultado em uma das categorias: abaixo do peso, peso normal, 
//sobrepeso, obesidade leve,
// obesidade moderada ou obesidade grave



function imc(weight, height) {
    console.log(typeof weight);
    if (typeof weight === "number" && typeof height === "number") {
        let imc = weight / (height * height)
        return imc
    } else {
        return console.log("necessário colocar somente números");
    }

}

function verifyImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal"
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso"
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade leve"
    } else if (imc >= 35 && imc < 29.9) {
        return "Obesidade moderada"
    } else if (imc >= 40) {
        return "Obesidade grave"
    }
}

const weight = 72
const height = 1.71

const IMC = imc(weight, height)
const categoryImc = verifyImc(IMC)

console.log(`seu imc é de ${IMC.toFixed(2)} por tanto voce esta ${categoryImc}`)