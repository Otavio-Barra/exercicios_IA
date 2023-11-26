/*Exercício 2: Fila Básica
Crie uma função que represente uma fila (queue). 
A função deve permitir enfileirar (enqueue) e desenfileirar (dequeue) elementos.

Dica: Utilize um array e os métodos push e shift para simular uma fila. */

function queue() {
    const queue = []

    function push(element) {
        queue.push(element)
    }
    function shift() {
        if (queue.length === 0) {
            return 'Erro! A fila está vazia.'
        } else {
            return queue.shift()
        }
    }

    return {
        push,
        shift,
        queue
    }
}

let teste = queue()
teste.push(23)
teste.push(3)
console.log(teste.queue);
teste.shift()
console.log(teste.queue);