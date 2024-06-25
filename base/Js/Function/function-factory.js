// Factory simples
function pessoa(){
  return {
    nome: 'joão',
    sobrenome: 'silva'
  }
}

console.log(pessoa())

// Exemplo
function produto(nome, preco){
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(produto('notebook', 2199.49))
console.log(produto('iPad', 1499.49))