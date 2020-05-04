class Conta {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        this.saldoCorrente = saldoCorrente
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
    }
    deposito(valor) {
        this.saldoCorrente += valor
    }
    saque(valor) {
        this.saldoCorrente -= valor
    }
    transferir(valor) {
        this.saldoPoupanca -= valor
        this.saldoCorrente += valor
    }
    jurosMes() {
        let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100
        this.saldoPoupanca += juros
    }
}

class contaEspecial extends Conta {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        super(saldoCorrente, saldoPoupanca, jurosPoupanca * 2)
    }
}





let conta = new Conta(100, 200, 2)
console.log(conta)

conta.deposito(100)

console.log(conta)

conta.saque(50)
console.log(conta)


conta.transferir(30)
console.log(conta)

conta.jurosMes()
console.log(conta)

let conta2 = new contaEspecial(1000, 50000, 1)

console.log(conta2)

conta2.saque(5000)

console.log(conta2)
conta2.jurosMes()
console.log(conta2)

conta2.transferir(5000)
console.log(conta2)