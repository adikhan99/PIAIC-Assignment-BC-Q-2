var a =("<p><strong><em>Only print this</em></strong></p>");
document.write(a)
document.write ("<br> Output: <br>")
document.write (a.slice((a.indexOf ("Only")),(a.indexOf ("</em>"))));