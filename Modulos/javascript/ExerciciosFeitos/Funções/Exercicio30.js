/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do
vetor. */

function maiorMenor (vet) {
    let maior
    let menor
    for (let i = 0; i < vet.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vet[i]
            menor = vet[i]
        } else {
            if (vet[i] > maior){
                maior = vet[i]
            }
            if(vet[i] < menor){
                menor = vet[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maiorMenor(vetor))
