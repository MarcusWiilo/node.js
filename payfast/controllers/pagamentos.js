module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log('Recebido a requisição de teste na porta 8080.')
        res.send('Ok Carai');
    });

    app.post('/pagamentos/pagamento', function(req, res){
        var pagamento = req.body;
        console.log('procesando uma requisição de um novo pagamento');

        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(conne);

        pagamentoDao.salva(pagamento, function(erro, resultado){
            console.log('pagamento criado');
            res.json(pagamento);

        });

    });
}

/*
const http = require('http');
const apiKey = 'bB376D7707816C151723D7258F5B0ED298998925965FF23DC3C509077EDBF9EC9';


"Authorization: Basic "

var request = require('request');
request('https://api.solarview.com.br/v1/authenticate/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */