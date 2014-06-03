var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var urls = [url1, url2, url3];
var res =[];
var count=0;
var http = require('http');
var bl = require('bl');

function metoden(url, posInArray){
	http.get(url, function(response){	
		response.pipe(bl(function(err, data){
			if(err) throw err;
			res[posInArray]=data.toString();
			count++;
			if(count==3){
				for(var increment=0;increment<res.length;increment++){
					console.log(res[increment]);
				}
			}
		}));
	});
}
for(var increment=0;increment<urls.length;increment++){
	metoden(urls[increment], increment);
}