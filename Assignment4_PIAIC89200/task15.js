var age = prompt("Please enter your age");
document.write ("Your age is: " + age);

var currentDate = new Date ();

var currentYear = currentDate.getFullYear();

var birthYear = currentYear - age
document.write ("<br>Your birth year is: " + birthYear);