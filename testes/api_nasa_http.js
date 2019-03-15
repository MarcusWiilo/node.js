const https = require('https');

https.get('https://api.solarview.com.br/v1/authenticate/', (resp) => {
  let solarview-token = '1a239bc916aee30a3a58900b1235670f';

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