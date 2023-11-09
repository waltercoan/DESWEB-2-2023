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
