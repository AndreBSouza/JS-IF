//Introdução ao uso de strings

//Os índices(posições) de Strings iniciam em 0.

var x = "    ola    ";
x.length;
var y = "logica";
alert(y.length); //6
alert("logica".length); //6
alert("Logica de Programacao!".length); //22

var x = "123abc";
x.charAt(0); //1
x[0]; //1
alert((x.charAt(0) >= "a") && (x.charAt(0) <= "z")); //false
alert((x.charAt(4) >= "a") && (x.charAt(4) <= "z")); //true

var t = "logica";
alert(t.toUpperCase()); //"LOGICA"
alert("LOGICA".toLowerCase()); //"logica"

alert("abc".charCodeAt(0)); //97
alert("ABC".charCodeAt(0)); //65

alert(String.fromCharCode(97)); //"a"
alert(String.fromCharCode(72, 69, 76, 76, 79)); // “HELLO”

var y = String.fromCharCode("abc".charCodeAt(0) - 32) + String.fromCharCode("abc".charCodeAt(1) - 32) + String.fromCharCode("abc".charCodeAt(2) - 32); //"ABC"
var y = "" + 123; //"123"

var y = "abc";
y.repeat(2); //"abcabc"

var a = "banana banana banana aba";
var p1 = a.indexOf("n"); //2
var p2 = a.indexOf("n", p1 + 1); //4
var p1 = a.indexOf("banana"); //0
var p2 = a.indexOf("banana", p1 + 1); //7
alert(a.indexOf("abacaxi")); //-1
alert(a.lastIndexOf("banana")); //14

alert(a.startsWith("banana")); //true
alert(a.endsWith("banana")); //false

var b = "raciocinio logico";
alert(b.substr(11)); //"logico"
alert(b.substr(11, 3)); //"log"

var b = "raciocinio logico";
alert(b.substring(7)); //"nio logico"
alert(b.substring(11, 14)); //"log"

var b = "raciocinio logico";
alert(b.replace("logico", "matematico")); // raciocinio matematico”

var b = "     teste     ";
alert(b.trim()); // “teste”

var b = "raciocinio logico";
alert(b.slice(11, 14)); // “log”
alert(b.slice(11)); // “logico”
