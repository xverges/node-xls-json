var xls_json = require('../')

xls_json({
  input: __dirname + '/number_format.xls',
  output: __dirname + '/test.csv'
});
