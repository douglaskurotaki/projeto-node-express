# Primeiros Passos
- Instalação do npm
- Instalação do **express**
	- npm i --save express@4.16.2 -E
- Criação do diretório **src**
- Criação do arquivo *src/servidor*
- No arquivo criado, criou-se uma variável para porta e inseriu um valor para a chamada na requisição e outra variável para instância do **express**.
	- Utilizou-se o padrão de projeto middleware, pois o objeto requer ele.
```javascript
const  porta  =  3003

const  express  =  require('express')
const  app  =  express()

app.get('/produtos', (req, res, next) => {
	// Para entender essa função: middleware
	console.log('Middleware 1...')
	next()
})

app.get('/produtos', (req, res, next) => {
	res.send({
		nome:  'Notebook',
		preco:  123.45
	}) //Converte para json
})

app.listen(porta, () => {
	console.log(`Servidor executando na porta ${porta}.`);
})
``` 
- No arquivo package.json, mudou "main" para src/servidor.js e criou mais um variável para o objeto, "start" recebendo o **nodemon**
- Para instalar o nodemon: 
	- npm i --save-dev nodemon@1.14.11 -E
	- --save: será salvo apenas nesse projeto
	- -dev: não será criado para produção
	- @: opção para colocar a versão específica
	- -E: versão exata ao que foi informado