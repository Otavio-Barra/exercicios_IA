// Sistema de Pontuação de um Jogo

// Vamos criar um programa que simula um sistema de pontuação para um
// jogo de perguntas e respostas. O programa deve fazer o seguinte:
// Solicitar ao jogador que responda a uma série de perguntas.
// Cada pergunta deve ter um valor associado.
// Se o jogador responder corretamente, ele ganha os pontos. Se responder incorretamente, ele perde pontos.
// No final, o programa deve exibir a pontuação total do jogador.
const prompt = require('prompt-sync')();

const questions = [
    { question: "Qual é a capital da França?", response: "Paris", value: 10 },
    { question: "Quantos lados tem um triângulo?", response: "3", value: 15 },
    { question: "Quem escreveu 'Dom Quixote'?", response: "Cervantes", value: 20 }
];




function askQuestion() {
    let points = 0
    for (const question of questions) {

        const response = prompt(question.question)
        if (response.toLowerCase() === question.response.toLocaleLowerCase()) {
            console.log(`sua resposta foi correta, pontos ganhos: ${question.value}`);
            points += question.value
        } else {
            console.log(`sua resposta esta errada`);
        }
    }
    return points
}

function main() {
    const endPoints = askQuestion()
    console.log(`sua pontuação foi de: ${endPoints}`)
}

main()