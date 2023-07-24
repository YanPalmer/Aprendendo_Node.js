/* Exercício 4: Escreva uma função em JavaScript que receba um array de números e retorne a média aritmética desses desses números.
*/

const prompt = require("prompt-sync")();
let n1 = prompt("Digite um número: ");
let n2 = prompt("Digite outro número: ");
let n3 = prompt("Digite mais um número: ");

function array() {
    array = [n1, n2, n3];
    return array;
}

function mediaAritmetica() {
    array();
    console.log(array);
    var somas = 0;
    var num = [];
    for (let i = 0; i < array.length; i++) {
        somas += Number(array[i]);
        num[i] = somas;
        // console.log(somas);  // Verificador
    }
    let mediaTotal = somas / array.length;
    console.log(`A média aritmética dos valores ${array[0]}, ${array[1]} e ${array[2]} é: ${mediaTotal}`);
}

mediaAritmetica();

// OK