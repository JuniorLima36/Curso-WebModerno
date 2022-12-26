/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há 
nesse vetor e imprime a quantidade no console. */

function negativos (vet) {
    let negativos = 0
    for(let i = 0; i < vet.length; i++) {
        if(vet[i] < 0) {
            negativos++
        }
    }
    return negativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
console.log(negativos(vetor))
