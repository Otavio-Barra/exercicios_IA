// Exercício 1: Validação de Dados de Formulário

// Crie uma função que valide os dados de um formulário HTML. A função deve aceitar um objeto
// JavaScript que represente os dados do formulário e um conjunto de regras de validação. As regras de
// validação devem ser definidas como um objeto onde as chaves correspondem aos nomes dos campos no formulário e
// os valores são funções de validação que retornam verdadeiro ou falso. A função de validação deve percorrer os
// campos do objeto de dados e aplicar as regras de validação apropriadas para cada campo. Se todos os campos passarem na
// validação, a função deve retornar verdadeiro; caso contrário, deve retornar falso e fornecer informações sobre quais campos falharam na validação.

// Por exemplo, as regras de validação podem ser definidas assim:

const rulesValidation = {
  name: (value) => value.length >= 3,
  email: (value) => /\S+@\S+\.\S+/.test(value),
  age: (value) => parseInt(value) >= 18,
};

// E o objeto de dados pode ser algo como:

const person1 = {
  name: "Joao",
  email: "joao@email.com",
  age: "25",
};
const person2 = {
  name: "maria",
  email: "maria@email.com",
  age: "05",
};

// A função de validação deve ser capaz de verificar se os dados do formulário atendem às regras de validação.

function validation(person, rulesValidation) {
  let invalidField = [];

  for (const key in rulesValidation) {

    if (rulesValidation.hasOwnProperty(key)) {
      let rulesResult = rulesValidation[key];

      if (!rulesResult(person[key])) {
        invalidField.push(key);
      }
    }
  }

  if (invalidField.length === 0) {
    return true;
  } else {
    return {
      sucesso: false,
      invalidFiel: invalidField,
    };
  }
}

console.log(validation(person1, rulesValidation));
console.log(validation(person2, rulesValidation));
