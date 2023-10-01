// Calculadora com Operações Avançadas
// Crie uma calculadora em JavaScript que permite ao usuário escolher uma operação
// matemática (adição, subtração, multiplicação, divisão, potência ou raiz quadrada) e,
// em seguida, insira os números necessários para realizar a operação escolhida.
// Implemente manipulação de erros para evitar divisão por zero e calcular a raiz quadrada de números negativos.

function calc(operation, numA, numB) {
    switch (operation) {
        case "adição":
            console.log(`${numA} + ${numB} = ${numA + numB}`)
            break;
        case "subtração":
            console.log(`${numA} - ${numB} = ${numA - numB}`)
            break;
        case "multiplicação":
            console.log(`${numA} x ${numB} = ${numA * numB}`)
            break;
        case "divisão":
            if (numB === 0) {
                console.log("sem divisão por 0 ")
            } else {
                console.log(`${numA} / ${numB} = ${numA / numB}`)
            }
            break;
        case "potencia":
            console.log(`potencia de ${numA} e ${numB} = ${Math.pow(numA, numB)}`)
            break
        case "raiz":
            if (numA < 0 || numB < 0) {
                console.log("sem raiz de 0 ou números negativos")
            } else {
                console.log(`raiz de ${numA} = ${Math.sqrt(numA)} \nraiz de ${numB} = ${Math.sqrt(numB)}`)
            }
            break
        default:
            console.log("erro, insira uma operação")
            break;
    }
}



calc("divisão", 10, 0)
calc("raiz", -10, 2)
calc("adição", 10, 2)


