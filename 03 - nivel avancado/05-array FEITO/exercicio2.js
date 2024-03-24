/*Exercício Avançado 2: Encontrando o Elemento Mais Frequente
Crie uma função que aceite um array de elementos e retorne o elemento que mais aparece no array. Se houver empate, retorne qualquer um dos elementos mais frequentes.

Dica: Use um objeto para rastrear a frequência de cada elemento no array. */

const array = [1, 5, 5, 1, 2, 4, 5, 6, 7]

function maisFrequente(array) {
    let contagem = {}
    array.forEach(element => {
        if (contagem[element] === undefined) {
            contagem[element] = 1

        } else {
            contagem[element]++
        }
    });

    let elementoMaisRepetido
    let frequenciaMaxima = 0

    for (let element in contagem) {
        if (contagem[element] > frequenciaMaxima) {
            frequenciaMaxima = contagem[element]
            elementoMaisRepetido = element
        }
    }
    return elementoMaisRepetido
}


console.log(maisFrequente(array));