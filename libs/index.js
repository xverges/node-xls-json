var fs = require('fs');
var xlsjs = require('xlsjs');

xls_json = function(config) {
  if(!config.input) {
    console.error("You must have to choose a file");
  }

  var wb = xlsjs.readFile(config.input);
  var filename, sheetname = '', target_sheet = '';
  if(target_sheet === '') 
    target_sheet = wb.SheetNames[0];
  ws = wb.Sheets[target_sheet];

  //make csv
  var csv_file = xlsjs.utils.make_csv(ws)
  var stream = fs.createWriteStream(config.output, { flags : 'w' });
  stream.write(csv_file);
}

module.exports = xls_json;
