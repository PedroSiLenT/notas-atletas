class Atleta {
    constructor(nome, sobrenome, idade, peso, altura, notas) {
        
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }


    calculaCatecoria() {
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
        
    }
}



let atleta1 = new Atleta("João", "Silva", 12, 40, 1.50, [10, 9, 8]);

console.log(atleta1.calcularIMC());
