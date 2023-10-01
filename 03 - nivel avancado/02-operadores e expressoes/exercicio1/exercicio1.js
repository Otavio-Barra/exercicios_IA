// Calculadora de Expressões Matemáticas
// Crie uma calculadora que pode avaliar expressões matemáticas complexas,
// incluindo adição, subtração, multiplicação, divisão, parênteses e precedência de operadores.

let menu

do {
    menu = prompt("digite aqui sua conta\n3- para sair")
    if (menu !== "3") {
        alert(`resultado da sua conta e ${eval(menu)}`)
    }

} while (menu !== "3")
