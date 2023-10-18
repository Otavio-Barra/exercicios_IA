// Determinando o Dia da Semana
// Crie um programa que solicita ao usuário um número de 1 a 7 e,
// em seguida, determina e exibe o dia da semana correspondente 
//(por exemplo, 1 para domingo, 2 para segunda-feira, etc.).

let menu


do {
    menu = prompt("Bem vindo digite um numero de 1 a 7 para ver qual dia da semana que é\nDigite a palavra 'sair' quando terminar.")
    switch (menu) {
        case "1":
            alert(`o numero ${menu} corresponde a Domingo`);
            break
        case "2":
            alert(`o numero ${menu} corresponde a Segunda-Feira`);
            break
        case "3":
            alert(`o numero ${menu} corresponde a Terça-Feira`);
            break
        case "4":
            alert(`o numero ${menu} corresponde a Quarta-Feira`);
            break
        case "5":
            alert(`o numero ${menu} corresponde a Quinta-Feira`);
            break
        case "6":

            alert(`o numero ${menu} corresponde a Sexta-Feira`);
            break
        case "7":
            alert(`o numero ${menu} corresponde a Sabado`);
            break
        case "sair":
            alert("ate breve")
            break
        default:
            alert('comando invalido')
            break
    }

} while (menu !== "sair");

