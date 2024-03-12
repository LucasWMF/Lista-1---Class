class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }
    informacoesFilme(){
        return(console.log(`Informações sobre o Filme:\nTítulo: ${this.titulo}\nGênero: ${this.genero}\nDuração: ${this.duracao / 60}h`));
    }
}

let Filme1 = new Filme("Duna Parte 1", "Drama, Ficção Científica", 141.6);
let Filme2 = new Filme("Duna Parte 2", "Ficção científica/Aventura", 147.6);

console.log(Filme1);
console.log(`${Filme1.informacoesFilme()}`);
console.log(Filme2);
console.log(`${Filme2.informacoesFilme()}`);