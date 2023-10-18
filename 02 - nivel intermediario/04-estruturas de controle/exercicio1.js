// Verificando Palíndromos
// Crie um programa que solicita ao usuário uma palavra ou frase e verifica se é um palíndromo,
// ou seja, se pode ser lido da mesma forma de trás para frente. Ignore espaços, pontuação e
// diferenças entre maiúsculas e minúsculas.

let test = "test"
let test2 = "raiar."
let test3 = "A droga do dote é todo da gorda"


function palindromo(text) {
    text = text.toLowerCase().replace(/[\W_]/g, '')
    let reverseText = text.split('').reverse().join('')
    if (text === reverseText) {
        console.log(`É um palindromo`)
    } else {
        console.log(`Não é um palindromo`);
    }

}

palindromo(test)
palindromo(test2)
palindromo(test3)

