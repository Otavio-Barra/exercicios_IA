// Calculadora de Média
// Crie um programa que solicita ao usuário três notas e calcula a média aritmética dessas notas.
// Em seguida, exiba a média e uma mensagem correspondente indicando se o aluno foi aprovado 
//(média maior ou igual a 7)
// ou reprovado (média menor que 7).

let schoolGrades = [15, 20, 25]

let sum = 0

for (let i = 0; i < schoolGrades.length; i++) {
    sum += schoolGrades[i]
}

const everage = sum / schoolGrades.length

console.log(everage);