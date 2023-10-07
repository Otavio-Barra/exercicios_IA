// Jogo de Adivinhação Matemática
// Crie um jogo de adivinhação matemática onde o programa gera uma expressão
// matemática aleatória com operadores e números aleatórios, e o jogador deve adivinhar
// o resultado correto. O programa deve informar se a resposta do jogador está correta ou não.

const prompt = require('prompt-sync')();

let menu
let contador = 5
let randomNumber = Math.floor(Math.random() * 16)
console.log(randomNumber)
do {
    menu = Number(prompt(`Digite um numero de 0 a 15 para ver se e o correto\ntentativas restantes ${contador}`))
    contador--
    if (menu === randomNumber) {
        console.log("parabens voce acertou recarregue a pagina e comece de novo")
        break
    }
    if (menu < 0 || menu > 15) {
        console.log("ai n meu chapa, de 0 a 15 so")
        contador++
    }
    if (contador === 0) {
        console.log("vish vc esgotou suas chances, n fique triste recarregue a pagina e tente de novo")
        break
    }
} while (true);