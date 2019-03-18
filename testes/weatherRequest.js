
var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=SaoPaulo&APPID=7d53e8b8e0e7813db728807ca0abe302', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});