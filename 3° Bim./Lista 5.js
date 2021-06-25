/*
1. 
Escreva um programa que codifica palavras da língua inglesa em Pig Latin.
O Pig Latin é uma forma de linguagem codificada utilizada por diversão.
Existem muitas variações nos métodos utilizados para formar palavras em Pig Latin.
Para simplificar, utilize o seguinte método.
Para traduzir uma palavra em inglês para uma palavra em Pig Latin, coloque a primeira letra da palavra em inglês no final da palavra e adicione as letras “ay”.
Assim, a palavra “jump” torna-se “umpjay”, a palavra “the” torna-se “hetay” e a palavra “computer” torna-se “omputercay”.
*/

var p = prompt("Digite uma palavra:");
alert(p + " em Pig Latin é " + (p.substr(1)) + (p[0]) + "ay");



/*
2. 
Escreva um programa que leia uma palavra ou frase e também leia uma letra.
O programa deve mostrar quantas vezes a letra aparece na palavra ou frase.
*/

var pf = prompt("Digite uma frase ou uma palavra:");
var l = prompt("Digite uma letra:")
var x = pf.length;
var c = 0;
while (x > 0) {
	x--;
	var a = pf[x];
	if (l == a) {
		c++;
	}
}
alert(l + " se repete " + c + " vezes.");



/*
3. 
Escreva um programa que leia uma palavra sem acentos e cedilha e mostre essa palavra em letras minúsculas, com a primeira letra em maiúsculo.
*/

var p = prompt("Digite uma palavra:");
alert(p[0].toUpperCase() + p.substr(1).toLowerCase());



/*
4. 
Escreva um programa que leia o código DDD e um número de telefone e monte uma String no formato: (DD) NNNN-NNNN, em que D representa um dígito do DDD e N um dígito do número de telefone.
*/

var D = prompt("Digite seu DDD:");
var N = prompt("Digite seu número de telefone:");
alert("(" + D + ") " + N.substr(0, 4) + "-" + N.substr(4));



/*
5. 
Escreva um programa que leia um String contendo um número de telefone no formato (DD) DDDD-DDDD, em que D representa um dígito do número (o que está entre parênteses é o número do DDD).
O programa deve verificar se o número está escrito de forma correta (pode haver um número de espaços em branco qualquer entre o número de DDD e o número do telefone).
Caso o número não tenha sido digitado corretamente, o programa deve mostrar uma mensagem “Número de telefone incorreto.”.
Caso contrário, o programa deve colocar o número do DDD em uma variável int e o número do telefone em outra variável int.
O conteúdo de cada uma das variáveis deve ser mostrado na tela, separadamente.
*/

var D = prompt("Digite seu número de telefone no formato: (DD) DDDD-DDDD, em que (DD) representa o seu DDD:");
if (D[0] == "(" && D[3] == ")" && D[4] == " " && D[9] == "-" && D.length == 14) {
	var DD = D[1] + D[2];
	var NN = D.substring(5, 9) + D.substring(10);
	if (!(isNaN(Number(DD))) && !(isNaN(Number(NN)))) {
		alert("Seu DDD: " + DD);
		alert("Seu número: " + NN);
	} else {
		alert("Número de telefone incorreto.");
	}
} else {
	alert("Número de telefone incorreto.");
}



/*
6.
Escreva um programa que é capaz de gerar o plural de algumas palavras em inglês.
O programa deve ler uma palavra, convertê-la para letras minúsculas, e mostrar seu plural na tela.
Utilize as seguintes regras para o plural:
	* A regra geral para o plural é acrescentar um 's' no final da palavra. Exemplos:
		◦ book = books
		◦ girl = girls
		◦ day = days
	* Para palavras terminadas em 'o', 'ch', 'sh', 'ss', 'x' e 'z', forma-se o plural acrescentando 'es' ao final da palavra. Exemplos:
		◦ tomato = tomatoes
		◦ church = churches
		◦ brush = brushes
		◦ glass = glasses
		◦ box = boxes
		◦ buzz = buzzes
	* Palavras terminadas em 'y', precedidos de consoante, perdem o 'y' e recebem 'ies' no final. Exemplos:
		◦ country = countries
		◦ family = families
*/

var p = (prompt("Digite uma palavra em inglês:")).toLowerCase();
var a = p;
if (p[p.length - 1] == "o" || (p[p.length - 1] == "h" && p[p.length - 2] == "c") || (p[p.length - 1] == "h" && p[p.length - 2] == "s") || (p[p.length - 1] == "s" && p[p.length - 2] == "s") || p[p.length - 1] == "x" || p[p.length - 1] == "z") {
	p += "es";
} else if ((p[p.length - 1] == "y") && (p[p.length - 2] != "a" && p[p.length - 2] != "e" && p[p.length - 2] != "i" && p[p.length - 2] != "o" && p[p.length - 2] != "u")) {
	p = p.substring(0, (p.length - 1)) + "ies";
} else {
	p += "s";
}
alert("O plural de " + a + " é " + p);



/*
7.
As datas são impressas em vários formatos comuns. Dois dos formatos mais comuns são:
25/04/1955 e 25 de abril de 1955
Escreva um programa que lê uma data no primeiro formato (como String) e mostre essa data no segundo formato.
*/

var d = prompt("Digite uma data no formato DD/MM/AAAA:");
var DD = d.substring(0, 2);
var MM = d.substring(3, 5);
var AAAA = d.substring(6);
if (MM == "01") {
	MM = "janeiro";
}
if (MM == "02") {
	MM = "fevereiro";
}
if (MM == "03") {
	MM = "março";
}
if (MM == "04") {
	MM = "abril";
}
if (MM == "05") {
	MM = "maio";
}
if (MM == "06") {
	MM = "junho";
}
if (MM == "07") {
	MM = "julho";
}
if (MM == "08") {
	MM = "agosto";
}
if (MM == "09") {
	MM = "setembro";
}
if (MM == "10") {
	MM = "outubro";
}
if (MM == "11") {
	MM = "novembro";
}
if (MM == "12") {
	MM = "dezembro";
}
alert(d + " = " + DD + " de " + MM + " de " + AAAA);



/*
8.
Escreva um programa que leia uma data no formato DD/MM/AAAA como String e diga se a data é válida ou não.
Uma data válida deve ter tamanho 10, possuir dígitos numéricos para D, M e A e conter /, ­ ou um ponto final separando dia, mês e ano.
O valor do mês deve estar entre 1 e 12 e o dia deve ser um número entre 1 e o número máximo de dias do mês.
*/

var d = prompt("Digite uma data no formato DD/MM/AAAA:");
var DD = Number(d.substr(0, 2));
var MM = Number(d.substr(3, 2));
var AAAA = Number(d.substr(6, 4));
if (!(isNaN(DD)) && !(isNaN(MM)) && !(isNaN(AAAA)) && d.length == 10 && (d[2] == "/" || d[2] == "-" || d[2] == ".") && (d[5] == "/" || d[5] == "-" || d[5] == ".") && MM >= 1 && MM <= 12) {
	if ((MM == 1 || MM == 3 || MM == 5 || MM == 7 || MM == 8 || MM == 10 || MM == 12) && (DD <= 31 && DD >= 1) || ((MM == 4 || MM == 6 || MM == 9 || MM == 11) && (DD >= 1 && DD <= 30)) || ((MM == 2 && (AAAA > 1584 && (AAAA % 400 == 0 || (AAAA % 4 == 0 && AAAA % 100 != 0)) && (DD >= 1 && DD <= 29)) || (!(AAAA % 400 == 0 || (AAAA % 4 == 0 && AAAA % 100 != 0)) && (DD >= 1 && DD <= 28))))) {
		alert(d + " é uma data válida.");
	} else {
		alert(d + " não é uma data válida.");
	}
} else {
	alert(d + " não é uma data válida.")
}



/*
9.
Os cheques impressos por computador contém um número fixo de espaços em que o computador pode imprimir uma quantia.
Suponha que um cheque de pagamento contenha oito espaços em que o computador pode imprimir seu valor.
Se o valor for grande, os oito espaços serão preenchidos. O valor 1230,60 ficaria:
1.230,60 (valor do cheque)
--------
01234567 (posição dos números)

Por outro lado, se o valor for menor que R$ 1000,00, vários espaços seriam deixados em branco. Por exemplo:
   99,87 (valor do cheque)
--------
01234567 (posição dos números)

contém três espaços em branco.
Se um cheque é impresso com espaços em branco, é mais fácil para alguém alterar o valor do cheque.
Para evitar que um cheque seja alterado, muitos sistemas de preenchimento de cheque inserem asteriscos no início para proteger o valor, como segue:
***99,87 (valor do cheque)
--------
01234567 (posição dos números)

Escreva um programa que leia uma quantia em dinheiro que será impressa em um cheque e depois imprime o valor em formato de cheque protegido com asteriscos se necessário.
Suponha que nove espaços estão disponíveis para imprimir o valor.
*/

var q = prompt("Digite a quantia de dinheiro que será impressa no cheque:");
if (q.length == 9) {
	q = q.substr(0, 3) + "." + q.substr(3);
} else if (q.length == 8) {
	q = q.substr(0, 2) + "." + q.substr(2);
} else if (q.length == 7) {
	q = q.substr(0, 1) + "." + q.substr(1);
}
for (var a = q.length; a < 9; a++) {
	q = "*" + q;
}
alert(q);
