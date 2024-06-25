/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function media (vet) {
    let soma = 0
    for(let i=0; i<vet.length; i++) {
        soma += vet[i]
    }
    return soma/vet.length
}

vetor = [1, 2, 3, 4, 5]
console.log(media(vetor))
