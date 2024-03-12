class Empresa {
    constructor(nome, receitaAnual, despesasAnuais) {
        this.nome = nome;
        this.receitaAnual = receitaAnual;
        this. despesasAnuais = despesasAnuais;
    }
    calcularLucroAnual(){
        return(this.receitaAnual - this.despesasAnuais)
    }

    exibirRelatorio(){
        return(console.log(`Relatório da Empresa:\nReceita Atual: ${this.receitaAnual}\nDespesas Anuais: ${this.despesasAnuais}\nLucro Anual ${this.calcularLucroAnual()}`));
    }
}

let Empresa1 = new Empresa("One 7", 80000000, 900000);
let Empresa2 = new Empresa("Google", 58140000000, 8000000000);

console.log(Empresa1);
console.log(`${Empresa1.exibirRelatorio()}`);
console.log(Empresa2);
console.log(`${Empresa2.exibirRelatorio()}`);