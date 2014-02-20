var filePath = process.argv[2];
var fs = require('fs');

var contents = fs.readFileSync(filePath).toString();

var numOfNewlines = contents.split('\n').length -1 ;

console.log(numOfNewlines);


