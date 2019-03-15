const got = require('got');

got('https://api.solarview.com.br/v1/consumerUnit/990/finantial/generationEnergy/20180821,20180821
?solarview-token=1a239bc916aee30a3a58900b1235670f, { json: true }).then(response => {
  console.log(response.body.url);
  console.log(response.body.explanation);
}).catch(error => {
  console.log(error.response.body);
});