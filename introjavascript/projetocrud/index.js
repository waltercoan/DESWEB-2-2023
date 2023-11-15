//Importar a biblioteca do Express
const express = require('express')
// Instanciar a biblioteca do Express
const app = express()
//importar a biblioteca express-handlebars
const { engine } = require('express-handlebars')
const path = require('path')

//aplicar a engine no express
app.set('view engine','handlebars')
app.engine('handlebars',engine(''))

//Código necessário para o nodejs servir os arquivos estáticos do bootstrap
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))



//Criar a rota principal da aplicação http://localhost/
app.get('/', function(req,res){
    //res.send('<h1>Mãe, não acredito</h1>')
    res.render('home/home')
})

//Iniciar a aplicação para ouvir a porta 80
app.listen(80, ()=>{
    console.log('Servidor rodando...')
    console.log('http://localhost/')
})
