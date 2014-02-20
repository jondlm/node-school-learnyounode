var port = process.argv[2];

var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req
      .pipe(map(function(chunk) { return chunk.toString().toUpperCase(); }))
      .pipe(res);
  } else {
    res.end('Please send a POST\n');
  }
});

server.listen(port);
