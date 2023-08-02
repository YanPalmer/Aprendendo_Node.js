class Conta {
    constructor(titular) {
        this.numero = "001";
        this.saldo = 0;
        this.titular = titular;
    }
}
const conta1 = new Conta();
conta1.titular = "Yan Palmer";
const conta2 = new Conta("Alcides");

console.log(conta1);
console.log(conta2);



class veiculo {
    // Método construtor com seus parâmetros
    constructor(rodas, marca, cor, valor, escada, nome) {
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
        this.valor = valor;
        this.escada = escada;
        this.nome = nome;
        this.quilometragem = 0;
    }
}

const fusca = new veiculo(4, "Volkswagen", "Vermelho", 60000, true,);

console.log(fusca);