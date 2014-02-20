var port = process.argv[2];

var http = require('http');
var url = require('url');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
  var parsed = url.parse(req.url);

  if (parsed.pathname.toLowerCase() === '/api/parsetime') {
    var date = new Date(parsed.query.slice(4));

    var dateObj = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dateObj));
    // res.end(JSON.stringify(parsed));

  } else if (parsed.pathname.toLowerCase() === '/api/unixtime') {
    var date = new Date(parsed.query.slice(4));

    var dateObj = {
      unixtime: date.getTime()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dateObj));
  }
});

server.listen(port);
