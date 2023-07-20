/* Exercício 2: Escreva uma função em JavaScript que receba dois números inteiros como parâmetros e retorne o maior número entre eles. 
*/

const prompt = require("prompt-sync")();
const entrada1 = prompt("Digite um número inteiro: ");
const entrada2 = prompt("Digite outro número inteiro: ");

if (entrada1 & entrada2) {
    if (entrada1 > entrada2) {  // Verifica se o primeiro valor é maior que o segundo
        console.log(`O maior número entre ${entrada1} e ${entrada2} é: ${entrada1}`);
    }
    else if (entrada2 > entrada1) { // Verifica se o segundo valor é maior que o primeiro
        console.log(`O maior número entre ${entrada1} e ${entrada2} é: ${entrada2}`);
    } else {    // Caso não haja números maiores eles provavelmente serão maiores
        console.log("Os números devem ser iguais. Tente novamente...");
    }
} else {
    prompt("Digite nos dois campos!");
}

// OK