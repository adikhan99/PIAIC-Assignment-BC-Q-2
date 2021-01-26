var input = prompt("Please enter a number?","e.g. 0 1 2 or 3");
var inputNo = input.split("");
var total = 0;
for (var i=0; i < input.length; i++){
	inputNo[i] = parseInt(inputNo[i]);
	if (inputNo[i]){
	total += inputNo[i];
	}
}
document.write("The number entered is ",input+"<br>");

document.write("The mean of all digits is ",total/input.length);