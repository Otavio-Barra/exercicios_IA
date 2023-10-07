// Comparando Idades
// Crie um programa que solicita a idade de duas pessoas e compara
// as idades para determinar quem é mais velho e por quantos anos uma
// pessoa é mais velha do que a outra.

const prompt = require('prompt-sync')();


const agePerson1 = Number(prompt('enter the age of the first person'))
const agePerson2 = Number(prompt('enter the age of the second person'))

function toCheckAge(person1, person2) {
    if (person1 > person2) {
        console.log(`The first person is older`)
        console.log(`Thank you for participating`);
    } else if (person1 < person2) {
        console.log(`The second person is older`)
        console.log(`Thank you for participating`);
    } else {
        console.log(`both people are the same age`);
    }
}

toCheckAge(agePerson1, agePerson2)