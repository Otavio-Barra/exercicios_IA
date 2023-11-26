/*Exercício Moderado 2: Encontrando o Maior Elemento em uma Matriz
Crie uma função que aceite uma matriz bidimensional de números e retorne o maior número presente na matriz.

Dica: Use loops aninhados para percorrer todos os elementos da matriz. */

const matriz = [
    [1, 2, 3],
    [4, 9, 4],
    [7, 8, 3]
];
const matriz2 = [
    [11, 13, 6, 4],
    [5, 1, 10, 3],
    [7, 16, 12, 15],
    [9, 14, 2, 8]
]

function maiorNumero(matriz) {
    let maior = 0
    for (const linhas of matriz) {
        for (const numero of linhas) {
            if (numero > maior) {
                maior = numero
            }
        }
    }
    return maior
}


console.log(maiorNumero(matriz));
console.log(maiorNumero(matriz2));