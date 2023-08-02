/*  Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade".
    Em seguida, crie um objeto chamado "Pessoa1" e atribua a ele um nome e uma idade.
*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const Pessoa1 = new Pessoa("Yan Palmer", 32);

console.log(Pessoa1);