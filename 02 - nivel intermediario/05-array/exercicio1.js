/*Exercício Moderado 1: Filtrando Números Pares
Crie um array de números inteiros e, em seguida, escreva uma função que retorne um novo array contendo apenas os números pares desse array.

Dica: Use o método filter() para criar um novo array com base em uma condição. */




const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const teste2 = [57, 84, 62, 39, 72, 46, 78, 33, 50, 89]


function pares(array) {
    const pares = array.filter(number => number % 2 === 0)
    return console.log(pares);
}
pares(teste)
pares(teste2)