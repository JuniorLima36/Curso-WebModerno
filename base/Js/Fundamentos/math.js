/*
Math
.sqrt - retorna a raiz quadrada de um número 
.abs - retorna o valor absoluto de um número 
.PI - representa a proporção entre circunferência de um círculo
.pow - retorna a base elevada ao expoente
.sign - retorna o sinal de um número, indicando se o número é positivo, negativo ou zero.
.random - retorna um número pseudo-aleatório
*/

// .PI
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)

// .sqrt
const raiz = Math.sqrt(25)
console.log(raiz)

// .random
const aleatório = Math.random()
console.log(aleatório)

// .pow
const expoente = Math.pow(7, 2)
console.log(expoente)

// .abs
const absoluto = Math.abs("-1")
console.log(absoluto)

// .sign
const indicando = Math.sign(3)
console.log(indicando)