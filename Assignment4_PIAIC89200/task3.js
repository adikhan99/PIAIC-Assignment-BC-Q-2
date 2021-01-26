
var pass = prompt("Give Password");
var lowerCaseAlpha = /[a-z]/;
var UpperCaseAlpha = /[A-Z]/;
var num = /[0-9]/;
if (pass.charAt(0) === num) {
    document.write("Invalid");
} else if (pass.length >= 8 &&  pass.num === /[0-9]/g && pass.lowerCaseAlpha === /[a-z]/g || pass.UpperCaseAlpha === /[A-Z]/g ) {
    document.write("Valid Password");
} else {
    document.write("Please enter a valid password. For Character codes of a-z, A-Z & 0-9");
}