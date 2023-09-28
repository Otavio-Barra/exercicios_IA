// Exercício 2: Manipulação de Arrays de Objetos

// Crie uma função chamada filtrarPorIdade que aceita um array de objetos e um valor mínimo de
// idade como parâmetros. Os objetos no array terão uma propriedade "idade". A função deve retornar
// um novo array contendo apenas os objetos cuja idade seja igual ou superior ao valor mínimo especificado.
// Por exemplo, se o array de entrada for:

// [
//   { nome: 'Alice', idade: 25 },
//   { nome: 'Bob', idade: 30 },
//   { nome: 'Charlie', idade: 20 }
// ]

// E o valor mínimo de idade for 25, a função deve retornar:

// [
//   { nome: 'Alice', idade: 25 },
//   { nome: 'Bob', idade: 30 }
// ]

// Isso requer a manipulação de objetos e a filtragem de arrays com base em propriedades específicas.

// Esses exercícios ajudarão a aprimorar suas habilidades de manipulação de dados e objetos em JavaScript.

let teste = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Lie", idade: 20 },
  { nome: "Char", idade: 40 },
  { nome: "Max", idade: 23 },
  { nome: "Bob", idade: 9 },
  { nome: "Rod", idade: 90 },
  { nome: "Live", idade: 50 },
];

function filterAge(array, age) {
  let filter = array.filter((array) => array.idade >= age);
  console.log(filter);
}

filterAge(teste, 25);
filterAge(teste, 40);
