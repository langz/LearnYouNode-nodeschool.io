var input = process.argv[2];
var net = require('net');
var time = new Date();
var timeformat = time.getFullYear() +"-"+addZeroInFront(time.getMonth()+1) +"-"+addZeroInFront(time.getDate()) 
+ " " + addZeroInFront(time.getHours())+ ":" + addZeroInFront(time.getMinutes());


var net = require('net');
var server = net.createServer(function (socket){
	socket.end(timeformat +'\n');
}).listen(input);

function addZeroInFront(inputz){
var inss = inputz+"";
var length=inss.length;
	if(length===1){
		return "0"+inputz;
	}
	else{
		return inputz;
	}
}