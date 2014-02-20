var myModule = require('./6-make-it-modular-module.js');
var directoryPath = process.argv[2];
var fileExtension = process.argv[3];

myModule(directoryPath, fileExtension, function(err, list) {
  if (err) return console.log(err);

  console.log(list.join('\n'));

});

