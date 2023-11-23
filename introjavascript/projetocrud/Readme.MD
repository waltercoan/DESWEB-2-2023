# Projeto CRUD DES WEB
- Iniciar o projeto
```
npm init
```
- Instalar as dependências
```
npm i express body-parser bootstrap express-handlebars jquery
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

## Inclusão do menu na aplicação
- Alterar o arquivo layouts/main.handlebars para incluir o navbar do bootstrap
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        {{{body}}}
    </body>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.js"></script>
</html>
```

## Listagem de clientes
- Alterar o arquivo index.js para incluir uma variável fakedata que simula o banco de dados armazenando uma lista de clientes
```
const fakedata = [
    {
        id: 1,
        nome: 'Zezinho da Silva',
        endereco: "Rua lalala 100",
        sexo: "Masculino",
        telefone: '5555-1234'
    },
    {
        id: 2,
        nome: 'Mariazinha',
        endereco: "Rua lelelelelel 200",
        sexo: "Feminino",
        telefone: '5555-4321'
    }
]
```
- No arquivo index.js, incluir uma nova rota na aplicação para abrir a tela principal dos clientes
```
app.get('/clientes', function(req,res){
    res.render('cliente/cliente',
        {listaclientes: fakedata})
})
```
- Criar dentro da pasta views uma nova subpasta chamada cliente
- Dentro da pasta views/cliente criar um arquivo cliente.handlebars que irá desenhar a tela de listagem dos clientes
```
<h1>Clientes</h1>
<table class="table">
    <thead>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Sexo</th>
            <th>Telefone</th>
        </tr>
    </thead>
    <tbody>
        {{#each listaclientes}}
        <tr>
            <td>{{this.id}}</td>
            <td>{{this.nome}}</td>
            <td>{{this.endereco}}</td>
            <td>{{this.sexo}}</td>
            <td>{{this.telefone}}</td>
        </tr>
        {{/each}}
    </tbody>
</table>
```
## Inclusão de um novo cliente
- Alterar o arquivo cliente.handlebars para incluir um botão para chamar a tela de cadastro de clientes
```
<h1>Clientes</h1>
<a href="./clientes/novo" class="btn btn-primary" >Novo</a>
```
- Alterar o arquivo index.js para incluir uma nova rota que irá abrir a tela com o formulário de clientes
```
app.get('/clientes/novo', function(req,res){
    res.render('cliente/formcliente')
})
```
- Criar na pasta views/cliente um novo arquivo chamado formcliente.handlebars com o código para desenhar o formulário de cadastro de clientes
```
<h1>Cliente</h1>
<hr>

<form action="/clientes/save" method="post">

    <div class="form-group">
        <label for="txtnome">Nome</label>
        <input type="text" class="form-control"
            name="nome" id="txtnome">
    </div>
    <div class="form-group">
        <label for="txtendereco">Endereço</label>
        <input type="text" class="form-control"
            name="endereco" id="txtendereco">
    </div>
    <div class="form-group">
        <label for="txtsexo">Sexo</label>
        <input type="text" class="form-control"
            name="sexo" id="txtsexo">
    </div>
    <div class="form-group">
        <label for="txttelefone">Telefone</label>
        <input type="text" class="form-control"
            name="telefone" id="txttelefone">
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>

</form>
```
- Alterar o código do index.js para incluir uma nova rota que irá receber os dados do post do formulário, criar um objeto cliente e então salvar na variável fakedata
```
app.post('/clientes/save', function(req,res){
    let novocliente = {
        id: 0,
        nome: req.body.nome,
        endereco: req.body.endereco,
        sexo: req.body.sexo,
        telefone: req.body.telefone
    }
    fakedata.push(novocliente)
    res.redirect('/clientes')
})
```
- Ainda no arquivo index.js, alterar o codigo inicial para importar e aplicar a biblioteca do nodejs chamada body-parser para permitir que nodejs receba os dados do formulário
```
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
```

## Código para gerar o código sequencial dos clientes
-  No arquivo index.js, na rota /clientes/save foi incluído o código para construir uma lista de IDs dos clientes e esta lista foi passada para a função MAX da biblioteca Math para encontrar o maior id. Esse valor foi acrescido de 1 para ser o próximo id do novo cliente
```
app.post('/clientes/save', function(req,res){
    let maiorid = Math.max(...fakedata.map(o => o.id))

    let novocliente = {
        id: maiorid+1,
        nome: req.body.nome,
        endereco: req.body.endereco,
        sexo: req.body.sexo,
        telefone: req.body.telefone
    }
    fakedata.push(novocliente)
    res.redirect('/clientes')
})
```

## Atleração de clientes
- No arquivo cliente.handlebars foi alterado o layout para incluir uma nova coluna na tabela, e um botao de alterar que passa como parâmetro da URL o id do cliente que deseja ser alterado
```
<h1>Clientes</h1>
<a href="./clientes/novo" class="btn btn-primary" >Novo</a>
<table class="table">
    <thead>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Sexo</th>
            <th>Telefone</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {{#each listaclientes}}
        <tr>
            <td>{{this.id}}</td>
            <td>{{this.nome}}</td>
            <td>{{this.endereco}}</td>
            <td>{{this.sexo}}</td>
            <td>{{this.telefone}}</td>
            <td><a href="/clientes/alterar/{{this.id}}"
            class="btn btn-warning"
            >Alterar</a></td>
        </tr>
        {{/each}}
    </tbody>
</table>
```
- No arquivo index.js foi inclusa uma nova rota que recebe o id do cliente que se deseja alterar, procura esse cliente pelo id na lista de clientes, e encaminha o usuario para a tela de formulário com os dados do cliente.
```
app.get('/clientes/alterar/:id',function(req,res){
    let id = req.params['id']

    let umcliente = fakedata.find(o => o.id == id)

    res.render('cliente/formcliente',
        {cliente: umcliente})
})
```
- O arquivo formcliente.handlebars foi alterado para: 
   - inclui o campo id como hidden para que o id do cliente seja enviado de forma escondida no formulário
   - em todos os campos input foi realizado o binding (cola) do valor do cliente recebido do backend para preencher cada campo de texto com o seu respectivo valor
```
<h1>Cliente</h1>
<hr>

<form action="/clientes/save" method="post">

    <input type="hidden" 
    name="id" 
    value="{{cliente.id}}">

    <div class="form-group">
        <label for="txtnome">Nome</label>
        <input type="text" class="form-control"
            value="{{cliente.nome}}"
            name="nome" id="txtnome">
    </div>
    <div class="form-group">
        <label for="txtendereco">Endereço</label>
        <input type="text" class="form-control"
            value="{{cliente.endereco}}"
            name="endereco" id="txtendereco">
    </div>
    <div class="form-group">
        <label for="txtsexo">Sexo</label>
        <input type="text" class="form-control"
            value="{{cliente.sexo}}"
            name="sexo" id="txtsexo">
    </div>
    <div class="form-group">
        <label for="txttelefone">Telefone</label>
        <input type="text" class="form-control"
            value="{{cliente.telefone}}"
            name="telefone" id="txttelefone">
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>

</form>
```
- O arquivo index.js foi alterado para que o código da rota /clientes/save realize tanto a operação de UPDATE (atualização), quanto INSERT (cadastro de um novo cliente)
```
app.post('/clientes/save', function(req,res){
    
    let clienteantigo = 
        fakedata.find(o => o.id == req.body.id)
    
    if (clienteantigo != undefined){
        clienteantigo.nome = req.body.nome
        clienteantigo.endereco = req.body.endereco
        clienteantigo.sexo = req.body.sexo
        clienteantigo.telefone = req.body.telefone
    }else{
    
        let maiorid = Math.max(...fakedata.map(o => o.id))

        let novocliente = {
            id: maiorid+1,
            nome: req.body.nome,
            endereco: req.body.endereco,
            sexo: req.body.sexo,
            telefone: req.body.telefone
        }
        fakedata.push(novocliente)
    }   
    res.redirect('/clientes')
})
```