var input = process.argv[2];
var input2 = process.argv[3];
var http = require('http');
var fs = require('fs');
var server =http.createServer(function(request, response){
	fs.createReadStream(input2).pipe(response);

})
.listen(input);