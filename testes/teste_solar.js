var request = require("request");

var options = { method: 'GET',
  url: 'https://api.solarview.com.br/v1/authenticate/',
  qs: { '': '' },
  headers: 
   {
     "cache-control": "no-cache",
     "Authorization: Basic": "base64encode(ti@taldi.com.br:Taldi2008)",
     "solarview-apikey": "B376D7707816C151723D7258F5B0ED298998925965FF23DC3C509077EDBF9EC9" } 
    };

request(options, function (error, response, body) {
 console.log('ok silvio');
 console.log(body);
});

