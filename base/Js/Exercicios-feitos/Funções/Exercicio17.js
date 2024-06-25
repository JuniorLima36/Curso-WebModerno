/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e 
imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é
inválido. */

function reajuste(plano, salario) {
    switch(plano){
        case 'a' :
            console.log(((salario * 10) / 100) + salario)
            break
        case 'b' :
            console.log(((salario * 15) / 100) + salario)
            break
        case 'c' :
            console.log(((salario * 20) / 100) + salario)
            break
        default :
            console.log('Plano é inválido');
    }
}
reajuste('a', 1000)
reajuste('b', 1000)
reajuste('c', 1000)
reajuste('d', 1000)
