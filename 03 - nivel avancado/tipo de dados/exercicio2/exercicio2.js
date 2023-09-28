// Exercício 2: Manipulação de JSON

// Crie um programa que leia um arquivo JSON externo (por exemplo, um arquivo JSON
//    em seu sistema de arquivos) e realize uma operação avançada, como filtragem, ordenação ou transformação
//    nos dados JSON lidos. Você pode usar a função fetch para ler um arquivo JSON da web ou uma biblioteca de manipulação
//    de arquivos JSON, dependendo do ambiente em que está trabalhando (Node.js ou navegador).

// Por exemplo, você pode ler um arquivo JSON com informações de produtos e implementar uma funcionalidade que
// filtra os produtos com base em critérios específicos, como preço ou categoria, ou pode ordenar os produtos com base em algum atributo.

// Esse exercício ajudará você a praticar a manipulação de dados JSON, que é uma parte fundamental do desenvolvimento web e de aplicativos modernos.

const filePath = "products.json";

async function puxaDados() {
  try {
    const response = await fetch(filePath);
    const data = await response.json();
    const produto = data.produtos;

    if (data.erro) {
      console.log("erro");
      return null;
    }
    return produto;
  } catch (err) {
    console.error("Erro na requisição", err);
    return null;
  }
}

async function filterData(key, valueKey) {
  try {
    let produtos = await puxaDados();

    if (!produtos) {
      console.log("produtos nao disponiveis");
      return;
    }
    let filteProduct;

    if (typeof valueKey == "string") {
      filteProduct = produtos.filter((product) => {
        return product[key] === valueKey;
      });
    } else if (typeof valueKey == "number") {
      filteProduct = produtos.filter((product) => {
        return product[key] >= valueKey;
      });
    }
    console.log(filteProduct);
  } catch (error) {
    console.error("Erro no filtro de dados:", error);
  }
}

filterData("preco", 3);
filterData("nome", "pao");
