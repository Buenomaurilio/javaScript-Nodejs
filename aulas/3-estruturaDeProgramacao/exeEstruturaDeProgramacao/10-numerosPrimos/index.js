let numero = 41
let divisoes = 0

for(let i = 0; i<= numero; i++){
    if(numero % i == 0) {
        divisoes ++
    }
}

if(divisoes == 2) {
    console.log(`${numero} é Primo`)
} else {
    console.log(`O ${numero} não é primo`)
}