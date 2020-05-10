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


let banco = new Banco(0)

console.log(banco)

banco.deposito(1000)



console.log(banco.saldo)

banco.saque(5000)

console.log(banco.saldo)

console.log(banco)