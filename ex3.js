var fs = require("fs");
var inputFirstParam = process.argv[2];
var buffer = fs.readFileSync(inputFirstParam);
var buffString = buffer.toString();
var newLines = buffString.split("\n").length - 1;
console.log(newLines);
