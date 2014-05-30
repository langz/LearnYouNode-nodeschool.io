var path = require("path");
var fs = require("fs");
function fileExtChecker(pathInput, fileExtInput, callback){
var read = fs.readdir(pathInput, function (error, pathData){
	var resArray=[];
	if(error) return callback(error);
	for(var increment=0;increment<pathData.length;increment++){
		var elem = pathData[increment];
		if(path.extname(elem)=== "."+fileExtInput){
		resArray.push(elem);
		}
		
}
callback(null, resArray);

});
}
module.exports=fileExtChecker;
