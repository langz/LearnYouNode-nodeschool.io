var input = process.argv;
var sum =0;
for(var increment=2;increment<input.length;increment++){
	sum+=Number(input[increment]);
}
console.log(sum);