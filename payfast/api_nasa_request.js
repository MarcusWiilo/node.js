const request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=LSAs1HvB41anVUL3H5avexmZeiL2JeXMwIoyQvaC', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});