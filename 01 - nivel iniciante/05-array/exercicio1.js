/*Exercício Iniciante 1: Acessando Elementos
Crie um array com alguns elementos e, em seguida, acesse e imprima o terceiro elemento desse array.
*/

const persons = ["Goku", "Vegeta", "Gohan", "Piccolo", "Trunks"];

function escolherPersonagem(array, number) {
    if (number < array.length && number >= 0) {
        return console.log(array[number]);
    } else {
        console.log("personagem nao encontrado");
    }
}

escolherPersonagem(persons, 3)
escolherPersonagem(persons, 0)
escolherPersonagem(persons, 5)
