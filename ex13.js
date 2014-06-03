var input = process.argv[2];
var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response){
	var parsed = url.parse(request.url, true);
	if(parsed.pathname==="/api/parsetime"){
		response.writeHead(200, {'Content-Type': 'application/json'});
		var dato = new Date(parsed.query.iso);
		var jsonResponse = JSON.stringify({hour: dato.getHours(), minute: dato.getMinutes(), second: dato.getSeconds()});
		response.end(jsonResponse);
	}
	else if(parsed.pathname==="/api/unixtime"){
		response.writeHead(200, {'Content-Type': 'application/json'});
		var dato = new Date(parsed.query.iso);
		var jsonResponse = JSON.stringify({unixtime: dato.getTime()});
		response.end(jsonResponse);
	}
	else{
		response.writeHead(404);
		response.end();
	}
}).listen(input);