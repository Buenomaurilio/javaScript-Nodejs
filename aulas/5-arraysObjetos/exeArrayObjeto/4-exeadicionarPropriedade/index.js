let onibus = {
        rodas:8,
        limPassageiros: 40,
        portas: 2
}

console.log(onibus)

onibus.janelas = 20 // adiciona propriedade janela com valor de 20 

console.log(onibus.janelas) //imprime propriedade janelas no console

console.log(onibus)

console.log(onibus.rodas) // imprime propriedade rodas com valor de 8

delete onibus.rodas // exclui a propriedade rodas do obj 'onibus'

console.log(onibus.rodas) // imprime a propriedade rodas, como foi excluida, não retorna nada

console.log(onibus)