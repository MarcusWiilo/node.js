const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=LSAs1HvB41anVUL3H5avexmZeiL2JeXMwIoyQvaC')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });

  
var axios2 = require('axios');

axios2.all([
  axios2.get('https://api.nasa.gov/planetary/apod?api_key=LSAs1HvB41anVUL3H5avexmZeiL2JeXMwIoyQvaC&date=2017-08-03'),
  axios2.get('https://api.nasa.gov/planetary/apod?api_key=LSAs1HvB41anVUL3H5avexmZeiL2JeXMwIoyQvaC&date=2017-08-02')
]).then(axios2.spread((response1, response2) => {
  console.log(response1.data.url);
  console.log(response2.data.url);
})).catch(error => {
  console.log(error);
});