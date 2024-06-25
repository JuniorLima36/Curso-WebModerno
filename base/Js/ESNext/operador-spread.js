function soma(x, y, z) {
  return x + y + z;
}
const numeros = [1, 2, 3];

console.log(soma(...numeros));
console.log(soma.apply(null, numeros));

// spread com objeto
const pessoa = {
  nome: 'Junior',
  idade: 24
}
const clone = {
  ...pessoa,
  ativo: true
}
console.log(clone)

// spread com array
const pessoas = ['joão','maria','carlos', 'Pedro', 'pamela']
const lista = [...pessoas]
console.log(lista)