let carros = ["BMW", "Fiat", "VW", "Renault", "Audi"]
let carroBuscado = 'Audi'

console.log(carros.includes("Fiat"))
console.log(carros.includes("Ford"))

// if(carros.includes("BMW")) {}

if(carros.includes (carroBuscado)) {
    console.log(`Carro ${carroBuscado} encontrado  !!!`)
}