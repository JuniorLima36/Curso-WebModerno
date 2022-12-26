/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele 
mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e
confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = 
“pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os 
valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior 
número de pontos e quando fez seu pior jogo. (Número do pior jogo). */

let pontos = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avalia (pontos) {
    let pontuacao = pontos.split(", ")
    let record = 0
    let pior = 1
    let maior = pontuacao[0]
    let menor = pontuacao[0]

    for (let i = 1; i < pontuacao.length; i++) {
        if(pontuacao[i] > maior) {
            maior = pontuacao[i]
            record++
        }else if (pontuacao[i] < menor) {
            menor = pontuacao[i]
            pior = i+1;
        }
    }
    return ([`Pela ${record} vez ele bateu seu recorde | Pior pontuação foi no ${pior}° jogo`])
}
 
console.log(avalia(pontos))