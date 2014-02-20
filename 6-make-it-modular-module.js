var fs = require('fs');
var path = require('path');

module.exports = function(directoryPath, fileExtension, callback) {
  fileExtension = '.' + fileExtension; // add the dot
  fs.readdir(directoryPath, function(err,list) {
    if (err) return callback(err);

    var listFiltered = list.filter(function(item) {
      return path.extname(item) === fileExtension;
    });

    callback(null, listFiltered);
  });
};

