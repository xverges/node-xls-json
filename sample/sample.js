var xls_json = require('../')

xls_json({
  input: __dirname + '/number_format.xls',
  output: __dirname + '/test.json'
}, function(err, result) {
  
  if(err) {
    console.error(err);
  } else {
    console.log(result);
  }
  
});
