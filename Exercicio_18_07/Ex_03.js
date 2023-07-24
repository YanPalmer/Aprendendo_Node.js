/* Exercício 3: Escreva um programa em JavaScript que solicite ao usuário um número inteiro positivo e exiba na tela todos os números primos até esse número.
*/

const prompt = require("prompt-sync")();
verificarEntrada();
function verificarEntrada() {
  const entrada = Number(prompt("Digite um número inteiro positivo: ")); // entrada: 11
    if (entrada == 0) {
        console.log("Obs: O valor digitado não pode ser 0");
        console.log("Tente novamente...");
        return verificarEntrada();
    } else if (entrada == 1) {
      console.log(`O valor ${entrada} não é primo`)
    } else {
        console.log("Aqui estão os números primos: ")
        for (let i = 2; i <= entrada; i++) {
            if((i % 1 == 0 & i % i == 0) & (i % 2 != 0 || i == 2) & (i % 3 != 0 || i == 3) & (i % 5 != 0 || i == 5) & (i % 7 != 0 || i == 7)) {
              console.log(i)
            } else {
            }
        }
    }
  console.log("Fím do código...")
}

// OK