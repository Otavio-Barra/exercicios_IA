// Operadores Aritméticos
// Crie um programa que solicita ao usuário dois números e, em seguida,
// realiza as seguintes operações com esses números:

// Soma os dois números.
// Subtrai o segundo número do primeiro número.
// Multiplica os dois números.
// Divide o primeiro número pelo segundo número.
// Calcula o resto da divisão do primeiro número pelo segundo número.



function calc(numA, numB) {
    let sum = numA + numB
    let subtract = numB - numA
    let mult = numA * numB
    let division = numA / numB
    let rest = numA % numB
    console.log(sum, subtract, mult, division, rest)

}

calc(4, 6)
