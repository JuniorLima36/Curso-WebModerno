/*5) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 
Deverá diferenciar números de strings.

Exemplos: 
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true */

function maiorIgual(num1, num2){
    if(num1 > num2 || num1 === num2){
        console.log(true)
    } else {
        console.log(false)
    }
}
maiorIgual(0, 0)
maiorIgual(0, '0')
maiorIgual(5, 1)