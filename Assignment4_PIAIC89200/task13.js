var date = new Date();
document.write("Current Date: ",date +"<br>");
var mSec = Date.now();
document.write("Elapsed Milliseconds since January 01, 1970: "+mSec+"<br>");
var Minutes = mSec/(1000*60)
document.write("Elapsed Minutes since January 01, 1970: "+Minutes);