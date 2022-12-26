/* 26) Fazer um programa para encontrar todos os pares entre 1 e 100. */

function pares() {
    item = 1
    while(item <= 100){
        if(item % 2 == 0){
            cont = item
            console.log(cont)
        }
        item++
    }
}
pares()
