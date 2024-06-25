/* 12) Faça um algoritmo que calcule o fatorial de um número. */

function fat(num) {
    if(num == 0){
        return 1
    } else {
        return num * fat(num -1)
    }
}
console.log(fat(10))