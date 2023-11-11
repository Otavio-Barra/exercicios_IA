/*Exercício Avançado 1: Combinando Dois Arrays
Escreva uma função que aceite dois arrays e retorne um novo array que combine os elementos dos dois arrays de forma alternada. Por exemplo, se os dois arrays forem [1, 2, 3] e [4, 5, 6], o resultado deve ser [1, 4, 2, 5, 3, 6].

Dica: Use um loop para percorrer ambos os arrays e construir o novo array. */

const number = [1, 2, 3, 4, 5]
const number2 = [6, 7, 8, 9, 10]
const persons = ["Goku", "Vegeta", "Gohan", "Piccolo", "Trunks"];
const persons2 = ["Goku", "Vegeta", "Gohan", "Piccolo", "Trunks", "nappa", "goku black"];



function interleave(array1, array2) {
    const interleaveArray = []
    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            interleaveArray.push(array1[i], array2[i])

        }
        console.log(interleaveArray);
    } else {
        console.log("coloque arrays de tamanhos iguais");
    }

}
interleave(number, number2)
interleave(number, persons)
interleave(number, persons2)

