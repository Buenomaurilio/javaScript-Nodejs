let nome = ['Maria', 'joao', 'Antonio']
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]



function verificaTamanho(arr) {
        if(arr.length > 5) {
                console.log('Muitos elementos!!!')
        }else {
                console.log('Poucos elementos!!!')
        }        
}

verificaTamanho(nome)
verificaTamanho(nums)
