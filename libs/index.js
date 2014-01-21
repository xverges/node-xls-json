var xlsjs = require('xlsjs');

xls_json = function(config) {
  var str = xlsjs.readFile(config.input);
  console.log(str);
}

module.exports = xls_json;
