const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/user', (req, res) => {
  console.log(req.body)
  console.log(req.query)
  res.send('<h1>Usuario Incluido.</h1>  <a href="http://localhost:8080/index.html">Voltar</a>')
})

app.post('/user/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  res.send('<h1>Usuario Alterado.</h1>')
})

app.listen(3000)