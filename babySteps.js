var myIndex = 2; // Did not need var myIndex. Could have just used var count (DUH).
var mySum = 0

for(var count = 2; count < process.argv.length; count++) {
	mySum += +process.argv[myIndex]; //Using +process.. vs Number(): Does it matter?
	myIndex++;
}

console.log(mySum);

