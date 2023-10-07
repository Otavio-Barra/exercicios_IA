// Comparação de Números
// Crie um programa que solicita dois números ao usuário e,
// em seguida, compara os números para determinar se o primeiro número é maior,
// menor ou igual ao segundo número.

const prompt = require('prompt-sync')();

const num1 = prompt("insira o primeiro numero")
const num2 = prompt("insira o segundo numero")

if (num1 > num2) {
    console.log(`o primeiro numero ${num1} e maior que o segundo numero ${num2}`);
} else if (num1 < num2) {
    console.log(`o primeiro numero ${num1} e menor que o segundo numero ${num2}`);
} else {
    console.log("os numeros sao iguais");
}