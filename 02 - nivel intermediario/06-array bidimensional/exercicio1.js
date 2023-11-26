/*Exercício Moderado 1: Transposição de Matriz
Escreva uma função que aceite uma matriz bidimensional e retorne a matriz transposta, 
ou seja, as linhas se tornam colunas e vice-versa. Por exemplo, se a matriz original for:

[
  [1, 2, 3],
  [4, 5, 6]
]
A matriz transposta seria:
[
  [1, 4],
  [2, 5],
  [3, 6]
]
Dica: Crie uma nova matriz e use loops aninhados para realizar a transposição. */
const matriz = [
  [1, 2, 3],
  [4, 5, 6]
]

function inverterMatriz(matriz) {
  const novaMatriz = matriz[0].map((coluna, index) => matriz.map(linha => linha[index]))
  return novaMatriz
}



console.log(inverterMatriz(matriz));

