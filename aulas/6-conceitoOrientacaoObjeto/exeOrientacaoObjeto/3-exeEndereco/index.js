class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }
    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }
    set novaCidade(novaCidade) {
        this.cidade = novaCidade
    }
    set novoEstado(novoEstado) {
        this.estado = novoEstado
    }

}

let endereco = new Endereco (29, 'São Rafael', 'São Paulo', 'SP')

console.log(endereco)

endereco.novaRua = 'Raimundo da Costa'
endereco.novoBairro = 'Rafael'
endereco.novaCidade = 'São Mateus'
endereco.novoEstado = 'RJ'

console.log(endereco)