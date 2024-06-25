/* 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o 
valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. 
Use o comando switch. Crie um caso default para produto não existente. */

function cardapio(item, quantidade) {
    switch (item) {
        case 100:
            item = 3,00
            console.log(`${quantidade} Cachorro Quente R$ ${quantidade * item} reais`)
            break
        case 200:
            item = 4,00
            console.log(`${quantidade} Hambúrguer Simples R$ ${quantidade * item} reais`)
            break
        case 300:
            item = 5,5
            console.log(`${quantidade} Cheeseburguer R$ ${quantidade * item} reais`)
            break
        case 400:
            item = 7,50
            console.log(`${quantidade} Bauru R$ ${quantidade * item} reais`)
            break
        case 500:
            item = 3,50
            console.log(`${quantidade} Refrigerante R$ ${quantidade * item} reais`)
            break
        case 600:
            item = 2,80
            console.log(`${quantidade} Suco R$ ${quantidade * item} reais`)
            break
        default:
            console.log('Produto não existente');
    }
}
cardapio(100, 2)
cardapio(200, 2)
cardapio(300, 2)
cardapio(400, 2)
cardapio(500, 2)
cardapio(600, 2)