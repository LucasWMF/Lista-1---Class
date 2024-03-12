class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularTotal() {
        return(this.preco * this.quantidade)
    }
}

let Produto1 = new Produto ("Sabonete", 4.50, 10);
let Produto2 = new Produto ("Chocolate", 7, 3);

console.log(Produto1);
console.log(`${Produto1.calcularTotal()}`);
console.log(Produto2);
console.log(`${Produto2.calcularTotal()}`);