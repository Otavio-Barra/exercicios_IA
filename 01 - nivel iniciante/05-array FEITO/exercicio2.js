/*Exercício Iniciante 2: Adicionando Elementos
Crie um array vazio e adicione três números inteiros a ele. Em seguida, imprima o array resultante.

Dica: Use o método push() para adicionar elementos a um array.*/


function addElements(...elements) {
    const array = []
    if (elements.length > 0) {
        array.push(...elements)
        console.log(array)
    } else {
        console.log("lista de elementos vazia");
    }
}


addElements("Goku", "Vegeta", "Gohan", "Piccolo", "Trunks")
addElements("Ken Kaneki", "Touka Kirishima", "Haise Sasaki", "Kishou Arima", "Hideyoshi Nagachika", "Rize Kamishiro", "Nishiki Nishio")
addElements()