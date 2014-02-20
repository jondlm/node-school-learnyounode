var http = require('http');
var url0 = process.argv[2];
var url1 = process.argv[3];
var url2 = process.argv[4];
var bl = require('bl');
var result = [];

http.get(url0, function(res) {
  res.pipe(bl(function (err, data) {
    data = data.toString('utf8'); // go from buffer to string
    collect(0, data);
  }));
});

http.get(url1, function(res) {
  res.pipe(bl(function (err, data) {
    data = data.toString('utf8'); // go from buffer to string
    collect(1, data);
  }));
});

http.get(url2, function(res) {
  res.pipe(bl(function (err, data) {
    data = data.toString('utf8'); // go from buffer to string
    collect(2, data);
  }));
});

function collect(ordinal, content) {
  result[ordinal] = content;

  if (result[0] && result[1] && result[2]) {
    result.forEach(function(item) { console.log(item); });
    // result.forEach(console.log); // this does not work for some odd reason, bug?
  }
}

