var pathInput = process.argv[2];
var fileExtInput = process.argv[3];
var path = require("path");
var fs = require("fs");

var read = fs.readdir(pathInput, function (error, pathData){
for(var increment=0;increment<pathData.length;increment++){
	var elem = pathData[increment];
	if(path.extname(elem)=== "."+fileExtInput){
		console.log(elem);
	}
}
});

