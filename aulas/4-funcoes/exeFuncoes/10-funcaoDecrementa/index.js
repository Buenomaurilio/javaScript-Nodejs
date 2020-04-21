function decrementa(numero) {
    for(let i = numero; i >= 0; i--) {
        if (i % 2 == 0) {
        console.log(`${i} é par !!!`)
        } else {
            console.log(`${i} é impar !!!`)
        }   
    }
}

decrementa(100)
