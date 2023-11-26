/*Exercício 1: Pilha Simples
Implemente uma função que simule uma pilha (stack) em JavaScript. 
A função deve ser capaz de empilhar (push) elementos, desempilhar (pop) 
elementos e retornar o elemento no topo da pilha.

Dica: Use um array para armazenar os elementos e utilize os métodos push e pop. */

function stack() {
    const stack = []

    function push(element) {
        stack.push(element)
    }
    function pop() {
        if (stack.length === 0) {
            return 'Erro! A pilha está vazia.'
        } else {
            return stack.pop()
        }
    }
    function last() {
        if (stack.length === 0) {
            return 'Erro! A pilha está vazia.'
        } else {
            return stack[stack.length - 1]
        }
    }
    return {
        push,
        pop,
        last
    }
}

let teste = stack()

teste.push(7)
teste.push(30)
console.log(teste.last());

teste.pop()
console.log(teste.last())