const superagent = require('superagent');

superagent.get('https://api.nasa.gov/planetary/apod')
.query({ api_key: 'LSAs1HvB41anVUL3H5avexmZeiL2JeXMwIoyQvaC', date: '2017-08-02' })
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log(res.body.url);
  console.log(res.body.explanation);
});