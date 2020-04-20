let idade = 19

if (idade == `${idade}`) {
    console.log(`A idade é ${idade}`)
}


if (idade > 18) {
    console.log('É maior de idade, pode entrar !!!')
}else {
    console.log('Não pode entrar pois é menor de idade!!!')
}

let nome = 'Maurilio'
if (nome == 'Maurilio' && idade > 10) {
    console.log('Liberado !!!')
}    


let passaport = true

if((nome == 'Maurilio' && idade > 30)  || passaport == true) {
    console.log('Liberado com Pendência !')
}