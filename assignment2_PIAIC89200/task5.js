var secretNumber=8
var guess=prompt("guess number between 1 and 10")
guess=Number(guess)
if(secretNumber==guess){
alert("Bingo!Correct answer")}
else if(guess+1==secretNumber){
alert("close enough to correct answer")}
else{alert("You didn't guess right")}