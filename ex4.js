var fs = require("fs");
var inputFirstParam = process.argv[2];
var buffer = fs.readFile(inputFirstParam, function(error, data){

if(error){
	console.log(error);
}
else{
	var buffString = data.toString();
	var newLines = buffString.split("\n").length - 1;
	console.log(newLines);
}


	});