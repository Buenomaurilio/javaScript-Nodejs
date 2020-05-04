function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({})
  cachorro.raca = raca
  cachorro.patas = patas
  cachorro.cor = cor
  cachorro.latir = function() {
    console.log("Au au")
  }
  return cachorro
}

let doberman = criaCachorro('Doberman', 4, 'preta')

let Titika = criaCachorro('Yorkshire', 4, 'cinza')

let Rabito = criaCachorro('SRD', 4, 'preta')

console.table(doberman)

console.log(Titika)

console.log(Rabito)

Rabito.latir()

Titika.latir()

doberman.latir()
