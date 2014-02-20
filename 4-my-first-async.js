var filePath = process.argv[2];
var fs = require('fs');

fs.readFile(filePath, function(err,buf) {
  var numOfNewlines = buf.toString().split('\n').length -1 ;
  console.log(numOfNewlines);
});

