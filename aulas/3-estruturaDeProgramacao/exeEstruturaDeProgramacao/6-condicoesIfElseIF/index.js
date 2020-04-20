let idade = 23
let idadeLimite = 18
let cnh = false

if (idade >= idadeLimite && cnh == false) {
    console.log(`Você é maior de ${idadeLimite}, porém não tem CNH`)
}else if (idade >= idadeLimite && cnh == true) {
    console.log(`Parabens você é maior de idade e possui cnh!!!`)
} else {
    console.log(`Você tem menos de ${idadeLimite}`)
}