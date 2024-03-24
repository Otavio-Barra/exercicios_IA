// Verificação de Idade
// Crie um programa que solicita a idade do
// usuário e verifica se ele é elegível para votar.
// A idade mínima para votar é 18 anos.

const prompt = require('prompt-sync')();

const name = prompt("insira o seu nome")
const age = Number(prompt("insira sua idade"))

if (age >= 18) {
    console.log(`${name} parabéns voce ja e de maior e tem idade para votar`);
} else {
    console.log(`${name} infelizmente voce nao e de maior e nao tem idade para votar`);
}
