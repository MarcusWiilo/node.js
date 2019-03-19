process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var request = require('request'),
username = "ti@taldi.com.br",
password = "Taldi2008",
url = "https://api.solarview.com.br/v1/authenticate/"
auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");

request(
    {
        strictSSL: false,
        method: 'GET',
        url : url,
        headers : {
            "Authorization" : auth,
            "cache-control" : "no-cache",
            "solarview-apikey": "B376D7707816C151723D7258F5B0ED298998925965FF23DC3C509077EDBF9EC9",
        }
    },

    function (error, response, body) {

        console.log(body);
        // Do more stuff with 'body' here
    }
);

console.log('Fazendo autenticação na API SolarView ');
