/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function paresImpares(vet) {
    let par = 0
    let impar = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i] % 2 == 0){
            par++
        } else {
            impar++
        }
    }
    return console.log(`São ${par} numeros pares e ${impar} numeros impares`)
}

vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13]
paresImpares(vetor)
