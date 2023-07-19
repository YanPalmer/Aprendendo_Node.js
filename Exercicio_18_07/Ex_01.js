/* Exercício 1: Escreva um programa em Javascript que solicite ao usuário um número inteiro e exiba na tela se o número é par ou ímpar.
*/
const prompt = require("prompt-sync")();
const entrada = prompt("Digite um número: ");
// console.log(4 % 2) Retorna 0
// console.log(5 % 2) Retorna 1
if (entrada % 2 === 0) {
    console.log("O número é PAR");    
} else {
    console.log("O número é IMPAR");
}

// OK