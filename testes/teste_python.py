var http = require("https");

var options = {
  "method": "GET",
  "hostname": [
    "api",
    "solarview",
    "com",
    "br"
  ],
  "path": [
    "v1",
    "authenticate",
    ""
  ],
  "headers": {
    "solarview-apikey": "B376D7707816C151723D7258F5B0ED298998925965FF23DC3C509077EDBF9EC9",
    "": "",
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic dGlAdGFsZGkuY29tLmJyOlRhbGRpMjAwOA==",
    "cache-control": "no-cache",
    "Postman-Token": "4e600894-f740-4c04-85e5-0fe859ef96ea"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();