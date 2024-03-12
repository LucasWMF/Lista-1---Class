class Celular {
    constructor(marca, modelo, armazenamento) {
        this.marca = marca;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
    }
    informacoesCelular(){
        return(console.log(`Informações do Dispositivo:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nArmazenamento: ${this.armazenamento} GB`))
    }
}

let Celular1 = new Celular("Samsung", "Galaxy A05", 128);
let Celular2 = new Celular("Motorola", "Moto G14", 4);

console.log(Celular1);
console.log(`${Celular1.informacoesCelular()}`);
console.log(Celular2);
console.log(`${Celular2.informacoesCelular()}`);