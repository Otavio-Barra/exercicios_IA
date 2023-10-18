// Simulador de Loteria
// Crie um programa que simula um jogo de loteria.
// O programa deve gerar aleatoriamente um conjunto de números para o sorteio e permitir
// que o jogador escolha um conjunto de números.
// O programa deve verificar quantos números o jogador acertou e informar o resultado.

/* 
1- criar um conjunto de numeros aleatorios OK
    1.1- criar funcao que gere 6 numeros aleatorios
    1.2 salvar os numeros no array
    1.3 retornar o array da funcao 

2- aceitar 6 numeros do usuario OK
    2.1 prompt para aceitar a entrada
    2.2 converter a string em array

3- verificar os 2 conjustos de numeros e voltar um resultado OK

*/
const prompt = require('prompt-sync')();

function generateRandomNumber() {
    let lotteryNumbers = []
    while (lotteryNumbers.length <= 6) {
        const randomNumber = Math.floor(Math.random() * 25)
        if (!lotteryNumbers.includes(randomNumber)) {
            lotteryNumbers.push(randomNumber)
        }
    }
    return lotteryNumbers
}


function numbersTheUserChoice() {
    console.log('seja bem-vindo a loteria')
    console.log('voce precisa escolher 6 numeros separados por virgula para o sorteio')
    const chosenNumbers = prompt('Escolhas 6 numeros de 1 a 25')
    const arrayOfChosenNumbers = chosenNumbers.split(",").map(numero => Number(numero))
    return arrayOfChosenNumbers
}

function lottery(randomArray, userArray) {
    const equalNumbers = []

    for (const numbersRandomArray of randomArray) {
        for (const numbersUserArray of userArray) {
            if (numbersRandomArray === numbersUserArray) {
                equalNumbers.push(numbersRandomArray)
                break
            }
        }

    }
    return equalNumbers
}



const verifyLottery = lottery(generateRandomNumber(), numbersTheUserChoice())

if (verifyLottery.length == 6) {
    console.log(`parabens voce acertou ${verifyLottery.length}, seu premio e 1.000.000,00 reais`);
} else if (verifyLottery.length <= 5 && verifyLottery.length >= 1) {
    console.log(`parabens voce acertou ${verifyLottery.length}, seu premio e 100,00 reais`);
} if (verifyLottery.length == 0) {
    console.log(`poxa que pena voce acertou ${verifyLottery.length}, n ganhou nada`);
}