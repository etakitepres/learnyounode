// Write a program that uses a single synchronous filesystem operation to read a file and print 
// the number of newlines it contains to the console (stdout), similar to running 
// cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument.

var fs = require("fs");
var myText = fs.readFileSync(process.argv[2], "utf8");
var myTextArray = myText.split("\n");

console.log(myTextArray.length - 1);



/* Different solution:

var fs = require("fs");
var myText = fs.readFileSync(process.argv[2], "utf8");
var newlineSum = 0;

for(var count = 0; count < myText.length; count++) {
	if (myText.charAt(count) == "\n") {
		newlineSum++;
	}
}

console.log(newlineSum); */