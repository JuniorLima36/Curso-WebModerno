const pessoa = {
  nome: 'joão',
  sobrenome: 'santos',
  idade: 25,
  altura: 1.85,
  peso: 75,
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { logradouro, numero = 412 } = pessoa
console.log(logradouro, numero)