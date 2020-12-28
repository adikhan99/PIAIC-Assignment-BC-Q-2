var celsius =+prompt("Enter Celsius Temperature");
var formula1 = (celsius * 9  / 5) + 32;
document.write(celsius +" C is "+formula1 + "F");
document.write("<br/>");

var fahrenheit =+prompt("Enter Fahrenheit Temperature");
var formula2 = (fahrenheit - 32) * 5 /9;
//var formula2 = (celsius * 9  / 5) + 32;
document.write(fahrenheit + " F is " +formula2 + "C");
//document.write("<br/>");
//document.write(formula2);  
