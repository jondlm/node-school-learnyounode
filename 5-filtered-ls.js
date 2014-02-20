var directoryPath = process.argv[2];
var fileExtension = '.' + process.argv[3];
var fs = require('fs');
var path = require('path');

fs.readdir(directoryPath, function(err,list) {
  var listFiltered = list.filter(function(item) {
    return path.extname(item) === fileExtension;
  });
  console.log(listFiltered.join('\n'));
});

