# V03 - Projeto com express
- Instalar o body-parser, que serve para fazer a análise do objeto para ser enviado no verbo **post**
`npm i --save body-parser@1.18.2`

- Precisamos instanciar o bodyParser e utilizar ele
```javascript
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))
// urlenconded é uma função que retorna uma função middleware que faz um parse no body da requisição
// Precisa passar um objeto como parâmetro obrigatório, extendido = true
// Qualquer requisição que se faz, ele vai passar por esse middleware e se o tipo de requisição for
// url.enconded, ele vai transformar o parser em objeto
```

- Foi criado os verbos PUT e DELETE
```javascript
app.put('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id, //id deve utilizar o PARAMS ao invés do body
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto) //JSON
})
```
- No arquivo *bancoDeDados* tivemos que inserir a função para excluir:
```javascript
function excluirProduto(id) {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}
```

