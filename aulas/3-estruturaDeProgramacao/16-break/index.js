let nome = 'Maurilio'

for (let i = 0; i < 10; i++) {
    
        
    if (i == 3) {
        nome = 'joão'
    }
    
    if(i == 5 && nome == 'joão') {
        console.log('O nome é joão, pode parar')
        break
    }
    console.log(i)
}