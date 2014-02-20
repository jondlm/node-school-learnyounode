var http = require('http');
var url = process.argv[2];
var bl = require('bl');

http.get(url, function(res) {

  res.pipe(bl(function (err, data) {
    data = data.toString(); // go from buffer to string
    console.log(data.length);
    console.log(data);
  }));

});

