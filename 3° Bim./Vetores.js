//Introdução ao uso de vetores

//ler N nomes
var v = [];
var p = prompt("Digite quantos nomes vc quer digitar?");
for (var c = 0; c < p; c++) {
	v[c] = prompt("Digite o nome:");
}
alert(v);

//ler 10 números
var v = [];
for (var c = 0; c < 10; c++) {
	v[c] = Number(prompt("Digite o número:"));
}
alert(v[0] + v[9]);

//ler N números
var N = Number(prompt("Digite a quantidade de números que será digitado:"));
var v = [];
for (var c = 0; c < N; c++) {
	v[c] = Number(prompt("Digite o número:"));
}
alert(v[0] + v[N - 1]);

//ler p números e mostrar: soma dos pares, qtde de ímpares, maior valor, menor valor, média, qtos acima da média, qtos abaixo da média, ordem crescente
var p = Number(prompt("Digite a quantidade de números que serão digitados:")),
	sp = 0,
	qi = 0,
	ma = 0,
	me = 0,
	st = 0,
	qacm = 0,
	qabm = 0;
var v = [];
for (var c = 0; c < p; c++) {
	v[c] = Number(prompt("Digite o número:"));
	if (c = 0) {
		me = v[c];
	}
	if (v[c] % 2 == 0) {
		sp += v[c];
	} else {
		qi++;
	}
	if (v[c] > ma) {
		ma = v[c];
	}
	if (v[c] < me) {
		me = v[c];
	}
	st += v;
}
for (c = 0; c < p; c++) {
	if (v[c] > (sat / (p - 1))) {
		qacm++;
	}
	if (v[c] < (sat / (p - 1))) {
		qabm++;
	}
}
alert("a soma dos pares: " + sp + "\naquantidade de ímpares: " + qi + "\no maior valor: " + ma + "\no menor valor: " + me + "\na média: " + st / (p - 1) + "\na quantidade de números acima da média: " + qacm + "\na quantidade de números abaixo da média: " + qabm);
