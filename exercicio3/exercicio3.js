class Aluno {
    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    calcularMedia() {
        return((this.nota1 + this.nota2) / 2);
    }
}

let Aluno1 = new Aluno("Ruan", 10, 9.5);
let Aluno2 = new Aluno("Rosana", 8.5, 10);

console.log(Aluno1)
console.log(`${Aluno1.calcularMedia()}`)
console.log(Aluno2)
console.log(`${Aluno2.calcularMedia()}`)