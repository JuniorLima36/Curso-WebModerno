const exPromise = new Promise((resolve, reject) => {
  const nome = 'junior'

  if(nome === 'junior') {
    resolve('Usuario junior encontrado')
  } else {
    reject('Usuario junior não encontrado')
  }
})

exPromise
  .then((data) => console.log(data))