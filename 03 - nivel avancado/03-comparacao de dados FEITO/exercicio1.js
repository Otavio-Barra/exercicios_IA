// Classificação de Números
// Crie um programa que solicita ao usuário uma lista de números
// separados por vírgula e classifica esses números em ordem crescente.
// Em seguida, apresente a lista ordenada ao usuário.


const stringNumbers = "5,2,8,1,6,3";

const arrayNumber = stringNumbers.split(',')

arrayNumber.sort((a, b) => a - b)

console.log(arrayNumber);