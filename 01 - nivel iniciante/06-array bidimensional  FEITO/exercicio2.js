/*Exercício Iniciante 2: Soma de Elementos em uma Coluna
Crie uma matriz bidimensional que represente uma tabela de vendas de produtos,
 onde cada linha contém o nome de um produto e as vendas em três meses. 
 Escreva uma função que aceite a matriz e um número de coluna e retorne a soma das vendas nessa coluna.

Dica: Use um loop para percorrer as linhas da matriz e somar os valores na coluna especificada. */

const tabela_vendas = [
    ["Produto A", 150, 200, 180],
    ["Produto B", 120, 100, 150],
    ["Produto C", 80, 90, 100]
]

function somaColuna(matriz, numero) {
    let soma = 0
    for (const linha of matriz) {
        if (linha[numero] > 0) {
            soma += linha[numero]
            return soma
        } else {
            return "coluna invalida";
        }
    }
}

console.log(somaColuna(tabela_vendas, 0));
console.log(somaColuna(tabela_vendas, 1));
console.log(somaColuna(tabela_vendas, 2));
console.log(somaColuna(tabela_vendas, 3));
