var url = process.argv[2];
var http = require('http');
var bl = require('bl');
http.get(url, function(response){
	response.pipe(bl(function(err, data){
		if(err) throw err;
		var tekst = data.toString();
		console.log(tekst.length);
		console.log(tekst);
	}));
});