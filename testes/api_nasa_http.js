const https = require('https');

https.get('https://api.solarview.com.br/v1/consumerUnit/1044/finantial/generationEnergy/20190207,20190207,0', (resp) => {
  let api_key = 'a350e597c6d37763cf2c052d7e1376a4';
  var auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");
  let headers = {
    "Authorization" : auth,
    "cache-control" : "no-cache",
    "solarview-token": "a350e597c6d37763cf2c052d7e1376a4",
  }

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});