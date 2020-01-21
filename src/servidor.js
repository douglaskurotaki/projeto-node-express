const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))
// urlenconded é uma função que retorna uma função middleware que faz um parse no body da requisição
// Precisa passar um objeto como parâmetro obrigatório, extendido = true
// Qualquer requisição que se faz, ele vai passar por esse middleware e se o tipo de requisição for
// url.enconded, ele vai transformar o parser em objeto

app.get('/produtos', (req, res) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto) //JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
})