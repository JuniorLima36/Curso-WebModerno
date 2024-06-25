// 'this' é lexicalmente delimitado (o valor this é estabelecido segundo o escopo de execução no qual está inserido).
// ES5 introduziu o método 'bind' para estabelecer o valor 'this' da função, independentemente de como ela seja chamada

const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falar2 = pessoa.falar.bind(pessoa)
falar2()


// this e bind
function Pessoa() {
  this.idade = 0

  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }.bind(this), 1000)
}

new Pessoa