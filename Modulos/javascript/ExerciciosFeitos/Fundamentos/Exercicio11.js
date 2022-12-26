/*11) Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como
um novo array:

Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16] */

function elemento(elementos) {
    const primeiro = elementos.shift()
    const ultimo = elementos.pop()
    return console.log([primeiro, ultimo])
}
elemento([7,14,"olá"])
elemento([-100, "aplicativo", 16])