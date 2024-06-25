// callback
function chamada(volta) {
  console.log('Dentro da função')
  volta()
  console.log('final da função')
}

chamada(function chamadaDeVolta() {
  console.log('voltando para dentro da função')
})