// Exercício 1: Verificando Tipos de Dados

// Crie uma função chamada verificarTipo que aceita um parâmetro e retorna uma
// mensagem que indica o tipo de dado do parâmetro. Use a função typeof para fazer
//essa verificação. Por exemplo, se o parâmetro for uma string, a função deve retornar
// "O tipo de dado é string". Se o parâmetro for um número, a função deve retornar "O tipo de dado é number".
// Certifique-se de lidar com vários tipos de dados, como boolean, null, undefined, etc.

function typeOf(type) {
  return console.log(`o tipo do parametro e ${typeof type}`);
}

typeOf(true);
typeOf("ola");
typeOf(0);
