class Atleta {
    constructor(nome, sobrenome, idade, peso, altura, notas) {
        
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }


    calculaCategoria() {
        if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        } else if(this.idade <= 13) {
            return "Juvenil"
        }else if(this.idade <= 15 ) {
            return "Intermediário"
        }else if(this.idade <= 30) {
            return "Adulto"
        }else {
            return "Sem categoria"
        }
    }


    calcularIMC() {

        let imc = this.peso / (this.altura * this.altura )
        return imc
    }


    calculaMediaValida() {
        this.notas = this.notas.sort((a, b) => a - b);


        let notasComputadas = this.notas.slice(1, 4);

        let soma = 0;
        notasComputadas.forEach(function(nota) {
        soma += nota;
        });

        let media = soma / notasComputadas.length;

        return media
    }


    obtemNomeAtleta() {
        return this.nome
    }


    obtemIdadeAtleta() {
        return this.idade
    }


    obtemPesoAtleta(){
        return this.peso
    }


    obtemNotasAtleta() {
        return this.notas
    }


    obtemAltura() {
        return this.altura
    }
}




let atleta = new Atleta("João", "Silva", 18, 40, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(
  `Nome: ${atleta.obtemNomeAtleta()}\n` +
  `Idade: ${atleta.obtemIdadeAtleta()}\n` +
  `Peso: ${atleta.obtemPesoAtleta()}\n` +
  `Altura: ${atleta.obtemAltura()}\n` +
  `Notas: ${atleta.obtemNotasAtleta()}\n` +
  `Categoria: ${atleta.calculaCategoria()}\n` +
  `IMC: ${atleta.calcularIMC()}\n` +
  `Media Valida: ${atleta.calculaMediaValida()}`

);
