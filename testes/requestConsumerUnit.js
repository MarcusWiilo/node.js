var request = require('request'),
username = "ti@taldi.com.br",
password = "Taldi2008",
url = "https://api.solarview.com.br/v1/consumerUnit/1273/info/"
auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");

request(
    {
        strictSSL: false,
        method: 'GET',
        url : url,
        headers : {
            "Authorization" : auth,
            "cache-control" : "no-cache",
            "solarview-token": "7f553a5198c34baf5cb9f1e81759b69c",
        }
    },

    function (error, response, body) {
        console.log(body);
        // Do more stuff with 'body' here
    }
);

console.log('Fazendo a requisição na API SolarView ');