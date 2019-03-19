var request = require('request'),
username = "ti@taldi.com.br",
password = "Taldi2008",
url = "https://api.solarview.com.br/v1/consumerUnit/1044/finantial/generationEnergy/20190207,20190207,0"
auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");

request(
    {
        strictSSL: false,
        method: 'GET',
        url : url,
        headers : {
            "Authorization" : auth,
            "cache-control" : "no-cache",
            "solarview-token": "a350e597c6d37763cf2c052d7e1376a4",
        }
    },

    function (error, response, body) {

        console.log(body);
        // Do more stuff with 'body' here
    }
);

console.log('Fazendo a requisição na API SolarView ');