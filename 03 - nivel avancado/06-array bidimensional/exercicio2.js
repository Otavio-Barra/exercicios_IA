/*Exercício Avançado 2: Encontrando um Elemento em uma Matriz
Crie uma função que aceite uma matriz bidimensional e um valor a ser pesquisado. 
A função deve retornar a posição (linha e coluna) do valor na matriz, se ele existir, 
ou indicar que o valor não foi encontrado.

Dica: Use loops aninhados para percorrer a matriz e compare cada elemento com o valor de pesquisa. */

const matrizA = [
    [1, 2],
    [3, 4],
];
const matrizB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
searchNumber(matrizA, 4)
searchNumber(matrizB, 8)
searchNumber(matrizA, 9)



function searchNumber(matriz, num) {
    for (let i = 0; i < matriz.length; i++) {
        const element = matriz[i];
        // console.log(element);
        for (let j = 0; j < element.length; j++) {
            // console.log(element[j] === num);
            if (element[j] === num) {
                return console.log(`o ${num} esta na linha ${i + 1} na coluna ${j + 1}`);
            }
        }
    }
    return console.log("numero nao encontrado");
}