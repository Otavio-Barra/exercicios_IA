// Verificando Números Primos
// Crie um programa que solicita ao usuário um número e verifica
//  se o número é primo ou não. Um número primo é aquele que só é divisível
//   por 1 e por ele mesmo.

function primo(number) {
    if (number <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}


function toCheck(number) {
    let check = primo(number) ? `${number} e primo` : `${number} nao e primo`
    return console.log(check);
}
const numero1 = 17
const numero2 = -10
const numero3 = 1
const numero4 = 5

toCheck(numero1)
toCheck(numero2)
toCheck(numero3)
toCheck(numero4)