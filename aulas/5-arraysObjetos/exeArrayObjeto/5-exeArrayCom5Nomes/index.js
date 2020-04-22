let nomes = ['Jose','Maurilio','Anderson','Maria','Pedro']
let nomeBuscado = 'Anderson'



if(nomes.includes(nomeBuscado)) {
        console.log(`O nome ${nomeBuscado} foi encontrado`)
} else {
        console.log(`${nomeBuscado}, não foi encontrado`)
}



for (i = 0; i < nomes.length; i++) {
        if(nomes[i] == nomeBuscado) {
                console.log(`O nome ${nomes[i]} foi encontrado`)
        }
}