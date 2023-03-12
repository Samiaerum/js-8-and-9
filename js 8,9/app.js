var a = 10;
var b =  0;
document.write(a);
document.write("<br>");
var c = ++a;
document.write(c)
document.write("<br>");
var d = ++a;
document.write(d)
document.write("<br>");
var e = --a;
document.write(e)
document.write("<br>");
var f= --a;
document.write(f);
/////////////////////////////////////////
document.write("<br>");
document.write("<br>");
var a = 2;
var b =  1;
--a;
document.write(a)
document.write("<br>");
var c = --a - --b;
document.write(c);
document.write("<br>"); 
var d = --a - --b + ++b;

document.write(d);
document.write("<br>");
var e = --a - --b + ++b + b--;
document.write(e);
/////////////////////////////////////////
document.write("<br>");
document.write("<br>");
var name = prompt("MY name?", "SAMIA");
var question = "MY name?";
var defaultanswer = "SAMIA";

var name = prompt(question,defaultanswer);
var age = prompt("MY age?" , "19");
var question = "MY age?";
var defaultanswer = "19";

var message="THANK YOU SAMIA!"; 
var greet="THANKS FOR VISITING";
alert(message);
alert(greet);