class Carrinho {
    constructor(itens, qtd, valorTotal){
    this.itens = itens
    this.qtd = qtd
    this.valorTotal = valorTotal
    }
    addItem(item) {

        let contador = 0
        
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1
            }
        }
        if(contador == 0) {
            this.itens.push(item)
        }

        this.qtd += item.qtd
        this.valorTotal += item.preco * item.qtd
    }

    removeItem(item) {
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {

                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id})
                
                this.qtd -= this.itens[itemCarrinho].qtd
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd

                this.itens.splice(index, 1)
            
            }
        }
    }

}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: 'Bermuda',
        qtd: 2,
        preco: 25
    },
    {
        id: 2,
        nome: 'jaqueta',
        qtd: 3,
        preco: 120
    },
    {
        id: 3,
        nome: 'calça',
        qtd: 3,
        preco: 40
    }
], 8,  530)

console.log(carrinho)

// carrinho.addItem({id: 2, nome: 'jaqueta', qtd: 2, preco: 80})
// console.log(carrinho)

// carrinho.addItem({id: 1, nome: 'bermuda', qtd: 3, preco: 20})
// console.log(carrinho)

// carrinho.addItem({id: 3, nome: 'calça', qtd: 3, preco: 40})
// console.log(carrinho)



carrinho.addItem({id: 4, nome: 'Boné', qtd: 2, preco: 40})
console.log(carrinho)

carrinho.removeItem({id: 1, nome: 'bermuda', qtd: 2, preco: 20})
console.log(carrinho)