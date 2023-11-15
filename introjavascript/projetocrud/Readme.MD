# Projeto CRUD DES WEB
- Iniciar o projeto
```
npm init
```
- Instalar as dependências
```
<<<<<<< HEAD
npm i express body-parser bootstrap express-handlebars jquery
=======
npm i express body-parser bootstrap
>>>>>>> 33dc337eb50a8e405119a88e02054b97a126edb3
npm i express-handlebars jquery
```
- Criar o arquivo index.js na pasta raiz do projeto
- Criar o código inicial da aplicação
```
//Importar a biblioteca do Express
const express = require('express')
// Instanciar a biblioteca do Express
const app = express()

//Criar a rota principal da aplicação http://localhost/
app.get('/', function(req,res){
    res.send('<h1>Mãe, não acredito</h1>')
})

//Iniciar a aplicação para ouvir a porta 80
app.listen(80, ()=>{
    console.log('Servidor rodando...')
    console.log('http://localhost/')
})
```
## Configuração da engine de layouts Handlebars
- Criar no projeto a pasta views
- Criar dentro da pasta views a subpasta layouts
- Dentro da pasta layouts criar o arquivo main.handlebars com o seguinte código
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
</head>
    <body>
        {{{body}}}
    </body>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.js"></script>
</html>
```
- Dentro da pasta views criar a subpasta home e criar o arquivo home.handlebars
```
<h1>Página principal</h1>
```
- No arquivo index.js realizar as seguintes alterações

```
//Importar a biblioteca do Express
const express = require('express')
// Instanciar a biblioteca do Express
const app = express()
//importar a biblioteca express-handlebars
const { engine } = require('express-handlebars')

//aplicar a engine no express
app.set('view engine','handlebars')
app.engine('handlebars',engine(''))
```

- Modificar o callback da rota / para renderizar o arquivo html
```
//Criar a rota principal da aplicação http://localhost/
app.get('/', function(req,res){
    //res.send('<h1>Mãe, não acredito</h1>')
    res.render('home/home')
})
```
## Configuração do Bootstrap
- Alterar o arquivo index.js para incluir o código necessário para servir os arquivos estáticos do Bootstrap
```
//Código necessário para o nodejs servir os arquivos estáticos do bootstrap
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))
```
- Alterar o arquivo layouts/main.handlebars para importar o CSS e o JavaScript do Bootstrap
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
</head>
    <body>
        {{{body}}}
    </body>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.js"></script>
</html>
```
