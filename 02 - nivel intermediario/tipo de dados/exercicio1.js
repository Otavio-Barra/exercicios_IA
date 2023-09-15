// Exercício 1: Verificando Propriedades em Objetos

// Crie uma função chamada verificarPropriedade que aceita dois parâmetros: um objeto e
// uma string que representa o nome de uma propriedade. A função deve verificar se o objeto possui
// a propriedade especificada. Se a propriedade existir no objeto, a função deve retornar true, caso
// contrário, deve retornar false. Certifique-se de lidar com diferentes tipos de objetos e propriedades.

function checkOwnership(obj, prop) {
  return obj.hasOwnProperty(prop);
}

let carro = {
  nome: "mustang",
  modelo: "ford",
  ano: "1997",
  pais: "franca",
  motor: "v8",
};
console.log(checkOwnership(carro, "modeo"));
console.log(checkOwnership(carro, "modelo"));
console.log(checkOwnership(carro, "pais"));
console.log(checkOwnership(carro, "portas"));
