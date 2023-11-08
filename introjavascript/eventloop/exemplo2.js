const express = require("express");
const app = express();

app.get('/infinito', function(req,res){
    let i = 0;
    /*while(i < 50000){
        console.log(i++);
    }*/
    setInterval(function(){
        console.log(i++);
    },5);
});

app.get("/date", function(req,res){
    res.json({
        date: new Date()
    })
});

app.listen(80);