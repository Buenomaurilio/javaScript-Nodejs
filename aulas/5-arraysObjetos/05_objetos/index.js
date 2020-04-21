let cachorro = {
  patas: 4,
  nome: 'Shark',
  cor: 'Preto',
  latir: function() {
    console.log("Au Au")
  }
}

console.log(cachorro.patas)
console.log(cachorro.nome)
cachorro.latir()


console.table(cachorro)
console.table(cachorro,(cachorro.latir()))

// [] = array
// {} = obj