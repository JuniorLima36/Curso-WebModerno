/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de 
aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros 
simples e a segunda retornará o valor da aplicação sob o regime de juros compostos. */

function simp(cap, taxa, temp) {
    console.log(cap + (cap * taxa * temp))
}
function comp(cap, taxa, temp) {
    console.log(cap * (1 + taxa) ** temp)
}
simp(100, 10/100, 2)
comp(100, 10/100, 2)