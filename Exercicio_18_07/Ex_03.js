/* Exercício 3: Escreva um programa em JavaScript que solicite ao usuário um número inteiro positivo e exiba na tela todos os números primos até esse número.
*/

const prompt = require("prompt-sync")();
const entrada = prompt("Digite um número inteiro positivo: "); // entrada: 10

for (var i = 0; i < entrada.length; i++) {
    if((entrada % 2 == 0) & (entrada % 3 == 0) & (entrada % 5 == 0)) {
        console.log("Não é um número primo")
    }
}