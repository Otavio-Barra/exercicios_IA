// Jogo de Adivinhação com Números Aleatórios
// Crie um jogo de adivinhação onde o programa gera um número
// aleatório entre 1 e 100 e permite ao jogador adivinhar qual é esse número.
// O programa deve fornecer dicas ao jogador, dizendo se o número secreto
// é maior ou menor do que a suposição atual.

const prompt = require('prompt-sync')();

let menu
let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)
do {
    menu = Number(prompt(`Digite um numero de 0 a 100 para ver se e o correto`))

    if (menu === randomNumber) {
        console.log("parabens voce acertou recarregue a pagina e comece de novo")
        break
    }
    if (menu < 0 || menu > 100) {
        console.log("ai n meu chapa, de 0 a 100 so")
    }
    if (menu > randomNumber) {
        console.log("ta quase mas o numero digitado e maior que o numero certo")
    } else {
        console.log("ta quase mas o numero digitado e menor que o numero certo")
    }
} while (true);
