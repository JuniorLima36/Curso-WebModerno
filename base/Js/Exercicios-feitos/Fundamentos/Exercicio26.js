/*26) Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com 
as consoantes, ou seja, sem as vogais.

Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts" */

function removerVogais(frase) {
    return console.log(frase.replace(/[aeiou]/ig, ''))
}

removerVogais("Cod3r")
removerVogais("Fundamentos")