function tipoDado(dado) {
    
    if(typeof dado === 'string') {
        console.log('string')
        
    } else if(typeof dado === 'number') {
        console.log('number')

    } else if(typeof dado === 'boolean') {
        console.log('boolean')

    }
} 

tipoDado(false)
tipoDado(34)
tipoDado('teste')
tipoDado(23)
tipoDado('Maurilio')
tipoDado(true) 