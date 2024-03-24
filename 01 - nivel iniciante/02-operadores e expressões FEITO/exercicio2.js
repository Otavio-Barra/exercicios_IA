// Expressões Condicionais
// Crie um programa que verifica se um número é par ou ímpar
//e exibe uma mensagem apropriada.


function toCheck(number) {
    let result = number % 2 === 0 ? "Par" : "Impar";
    console.log(result)
}

toCheck(4)
toCheck(5)
toCheck(567)
toCheck(544)
toCheck(1)
