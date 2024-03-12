class Casa {
    constructor(endereco, numeroQuartos, area) {
        this.endereco = endereco;
        this.numeroQuartos = numeroQuartos;
        this.area = area;
    }
    informacoesCasa() {
        return(console.log(`Inforamções da Casa\nEndereço: ${this.endereco}\nNumero de Quartos: ${this.numeroQuartos}\nArea: ${this.area} m²`));
    }
}

let Casa1 = new Casa("Rua Bla Bla Bla, 167", 5, 300);
let Casa2 = new Casa("Rua Sla Sla Sla, 671", 2, 100);

console.log(Casa1);
console.log(`${Casa1.informacoesCasa()}`);
console.log(Casa2);
console.log(`${Casa2.informacoesCasa()}`);