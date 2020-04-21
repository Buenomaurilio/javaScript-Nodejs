const numAleatorio = function () {
    console.log(Math.random())
}

numAleatorio(1000)


function aleatorio(num) {
    return Math.floor(Math.random() * num) + 1
    
}

console.log(aleatorio(10))
console.log(aleatorio(100))
console.log(aleatorio(1000))