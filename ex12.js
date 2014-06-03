var input = process.argv[2];
var http = require('http');
var map = require('through2-map');
var server =http.createServer(function(request, response){
	request.pipe(map(function(stream){
		return stream.toString().toUpperCase();
	})).pipe(response);
})
.listen(input);