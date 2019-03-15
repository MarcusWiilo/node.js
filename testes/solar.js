const superagent = require('superagent');

superagent.get('https://api.solarview.com.br/v1/authenticate/')
.query({ api_key: 'B376D7707816C151723D7258F5B0ED298998925965FF23DC3C509077EDBF9EC9'})
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log(res.body.url);
  console.log(res.body.explanation);
});