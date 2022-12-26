/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são 
diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência 
de um triângulo).*/

function tri(x, y, z) {
    if((x == y) && (y == z)){
        console.log('Equilátero')
    } else if (x == y || y == z || x == z){
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}
tri(1, 1, 1)
tri(2, 3, 3)
tri(1, 2, 3)