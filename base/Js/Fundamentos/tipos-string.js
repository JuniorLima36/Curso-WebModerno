/*
# tipos: String
- Template string
*/

const pessoa = 'jun1or'

console.log(pessoa.charAt(4))
console.log(pessoa.charAt(5))
console.log(pessoa.charCodeAt(3))
console.log(pessoa.indexOf('3'))

console.log(pessoa.substring(1))
console.log(pessoa.substring(0, 3))

console.log('Pessoa '.concat(pessoa).concat('!'))
console.log(pessoa.replace(3, 'i'))

console.log('Ana,maria,pedro'.split(','))

// Template string
let nome = 'joão'
console.log(`${nome} foi ao mercado`)
console.log(nome + ' foi ao mercado')