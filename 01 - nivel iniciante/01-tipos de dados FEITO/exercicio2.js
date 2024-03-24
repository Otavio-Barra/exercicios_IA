// Exercício 2: Conversão de Tipos

// Crie uma função chamada converterTipo que aceita dois parâmetros: um valor e um tipo desejado.
// A função deve converter o valor para o tipo desejado e retornar o valor convertido. Por exemplo,
// se a função receber os parâmetros (5, "string"), ela deve retornar a string "5". Se a função receber
// os parâmetros ("10", "number"), ela deve retornar o número 10. Certifique-se de lidar com conversões entre
// tipos diferentes, como string para número, número para string, etc.

function convertType(value, typeConvert) {
  switch (typeConvert) {
    case "string":
      console.log(
        `o valor ${value} que e ${typeof value} virou ${typeof value.toString()}`
      );
      break;
    case "number":
      console.log(
        `o valor ${value} que e ${typeof value} virou ${typeof parseFloat(
          value
        )}`
      );
      break;
    default:
      console.log("tipo invalido");
  }
}
convertType(5, "string");
convertType("ola", "number");
convertType(5, "strin");
