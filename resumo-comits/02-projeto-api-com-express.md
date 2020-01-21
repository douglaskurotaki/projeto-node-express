# V02 - Projeto com express
- Foi criado um arquivo *bancoDeDados.js* com as respectivas funções:
 ```javascript
 const sequence = {
  _id: 1,
  get id() {
    return this.id++
  }
} // Gerador de id em sua chamada

const produtos = {}

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id //Exemplo da chamada da sequence
  produtos[produto.id] = produto
  return produto
}

function getProduto(id) {
  return produtos[id] || {} // Caso não tenha valor, irá retornar objeto vazio
}

function getProdutos() {
  return Object.values(produtos) // Irá retornar todos os objetos com seus respectios chaves e valores
}

module.exports = {
  salvarProduto,
  getProduto,
  getProdutos
} // Exportação para o servidor.js
 ```
- No arquivo *servidor.js*, foi feito a instância do bancoDeDados

**Nessa parte, estamos requisitando de todos os produtos:**
```javascript
app.get('/produtos', (req, res) => {
  res.send(bancoDeDados.getProdutos())
})
```

**Nessa, passamos um id para retornar respectivo produto**
```javascript
app.get('/produtos/:id', (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})
```

**Utilizamos dessa para salvar**
```javascript
app.post('/produtos', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //JSON
})
```