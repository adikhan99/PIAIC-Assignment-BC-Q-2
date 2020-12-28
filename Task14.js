var a = 2;
var b = 1;
document.write("a is " + a);
document.write("<br/>")
document.write("b is " +b);
document.write("<br/>")
var result = --a - --b + ++b + b--;
document.write("result is "+result);//3
document.write("<br/>")
document.write("--a will produce 1")
document.write("<br/>")
document.write("--a - --b will produce 1") 
document.write("<br/>")
document.write("--a - --b + ++b will produce 3")
document.write("<br/>")
document.write("--a - --b + ++b + b-- will produce 3")
