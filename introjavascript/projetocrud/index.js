//Importar a biblioteca do Express
const express = require('express')
// Instanciar a biblioteca do Express
const app = express()

//importar a biblioteca express-handlebars
const { engine } = require('express-handlebars')
const path = require('path')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
//aplicar a engine no express
app.set('view engine','handlebars')
app.engine('handlebars',engine(''))

//Código necessário para o nodejs servir os arquivos estáticos do bootstrap
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))


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


//Criar a rota principal da aplicação http://localhost/
app.get('/', function(req,res){
    //res.send('<h1>Mãe, não acredito</h1>')
    res.render('home/home')
})

app.get('/clientes', function(req,res){
    res.render('cliente/cliente',
        {listaclientes: fakedata})
})

app.get('/clientes/novo', function(req,res){
    res.render('cliente/formcliente')
})

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

app.get('/clientes/alterar/:id',function(req,res){
    let id = req.params['id']

    let umcliente = fakedata.find(o => o.id == id)

    res.render('cliente/formcliente',
        {cliente: umcliente})
})

//Iniciar a aplicação para ouvir a porta 80
app.listen(80, ()=>{
    console.log('Servidor rodando...')
    console.log('http://localhost/')
})
