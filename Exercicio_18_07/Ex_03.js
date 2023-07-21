/* Exercício 3: Escreva um programa em JavaScript que solicite ao usuário um número inteiro positivo e exiba na tela todos os números primos até esse número.
*/

const prompt = require("prompt-sync")();
const entrada = Number(prompt("Digite um número inteiro positivo: ")); // entrada: 11
verificarEntrada();
function verificarEntrada() {
    if (entrada == 0 || entrada == 1) {
        console.log("Obs: O valor digitado não pode ser 0 ou 1");
        console.log("Tente novamente...");
        return verificarEntrada();
    } else {
        for (let i = 2; i < entrada; i++) {
            if(i % 2 != 1 || i % 3 != 1 || i % 5 != 1) {
                console.log(`O valor ${i} é primo`);
            } else {
                console.log(`O valor ${i} não é primo`);
            }
        }
        console.log("Fím do código...")
    }

}
