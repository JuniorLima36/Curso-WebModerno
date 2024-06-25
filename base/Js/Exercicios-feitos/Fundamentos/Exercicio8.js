/*8) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0 */

function multiplicar(numeroA, numeroB) {
    let resultado = 0
    for(let i = 0; i < numeroB; i++){
        resultado += numeroA
    }
    return console.log(resultado)
}
multiplicar(5, 5)
multiplicar(0, 7)