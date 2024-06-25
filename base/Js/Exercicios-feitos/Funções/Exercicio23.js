/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada
do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o 
código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior 
ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja
negativo. */

function notas(codigo, n1, n2, n3) {
    let nota = []
    nota.push(n1)
    nota.push(n2)
    nota.push(n3)
    nota.sort((a,b) => a < b ? 1 : -1)

    let media = (nota[0] * 4 + nota[1] * 3 + nota[2] * 3) / 10
    console.log(`Codigo do Aluno: ${codigo}. Notas: ${n1}, ${n2}, ${n3}. ${media < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}
notas(8036, 2.8, 6, 3.5)
notas(3840, 4.8, 9, 6.5)
