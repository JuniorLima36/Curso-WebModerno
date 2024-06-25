/*
# Dados
- Criando e Atribuindo dados a variaveis
- let e const: são locais e só funcionam dentro de um escopo de bloco onde foi criado
- var: é global e poderá funcionar fora de um escopo de bloco, acaba acontecendo o hoisting, é o içamento da variavel antes de ser definida preveamente 
*/

a = 2
b = 3
soma = a + b
console.log(soma)

// Var
console.log(x)
{
  var x = 10
}
console.log(x)

// Let
{
  let c = 10
  console.log(c)
}
let d = 5
console.log(d)

// Const
{
  const z = 10
  z = 5
  console.log(z)
}
