var sentence = "The quick brown fox jumps over the lazy dog";
document.write (sentence);

var splitter = sentence.split (" ");

var count = 0;

for (var i=0; i<splitter.length;i++){
    if (splitter[i] === "The" || splitter[i] === "the"){
    count++;
}
}
document.write ("<br>The number of occurrences of the word 'the' is : " + count);