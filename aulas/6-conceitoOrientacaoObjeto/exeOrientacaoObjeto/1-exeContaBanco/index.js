class Banco {
    constructor(saldo) {
       this.saldo = saldo
    }
    deposito(valor) {
        this.saldo += valor
    }
    saque(valor) {
        this.saldo -= valor
    }

}


let banco = new Banco(1000)

banco.deposito(1000)



console.log(banco.saldo)

banco.saque(200)

console.log(banco.saldo)