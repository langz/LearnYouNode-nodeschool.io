var pathInput = process.argv[2];
var fileExtInput = process.argv[3];
var mymodule = require("./ex6.js");

mymodule(pathInput, fileExtInput,function(error,data){

if(error)throw error;

for(var incr=0;incr<data.length;incr++){
console.log(data[incr]);
}

});