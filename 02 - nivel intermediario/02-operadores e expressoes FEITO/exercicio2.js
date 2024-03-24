// Conversor de Temperatura
// Crie um programa que converte a temperatura de Celsius para Fahrenheit
//  ou de Fahrenheit para Celsius, dependendo da escolha do usuário. Utilize
// a fórmula de conversão apropriada.



function calc() {
    let temp = prompt("escolha qual deseja transformar\n1- Celsius → Fahrenheit\n2- Fahrenheit → Celsius\n3- sair\n digite somente o numero")
    let number

    if (temp === "1") {
        number = Number(prompt("Numero que quer converter"))
        alert(`${number} graus Celsius sao ${(number * 9 / 5) + 32} Fahrenheit`)
        calc()
    } else if (temp === "2") {
        number = Number(prompt("Numero que quer converter"))
        alert(`${number} Fahrenheit sao ${(number - 32) * 5 / 9} graus Celsius`)
        calc()
    } else if (temp === "3") {
        alert(`ate breve`)
    }

}
calc()