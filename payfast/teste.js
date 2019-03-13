var express = require('express');
var app = express();

app.listen(8080, function(){
    console.log('Servidor rodando na porta 8080,');
});

app.get('/teste', function(req, res){
    console.log('Recebido a requisição de teste na porta 8080')
    res.send('Ok Carai');
});

