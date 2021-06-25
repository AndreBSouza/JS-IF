var M = [
		[],
		[],
		[]
	],
	s1 = 0,
	s2 = 0,
	s3 = 0;
for (c = 0; c < 3; c++) {
	for (i = 0; i < 3; i++) {
		M[c][i] = Number(prompt());
	}
}
for (i = 0; i < 3; i++) {
	s1 += M[0][i];
	s2 += M[1][i];
	s3 += M[2][i];
}
alert(s1 + "\n" + s2 + "\n" + s3);

/* ------------------------------------------------------- */

var s1 = prompt("Digite aalgo para o primeiro vetor:"),
	s2 = prompt("Digite algo para o segundo vetor:"),
	v1 = s1.split(" "),
	v2 = s2.split(" "),
	r = [];
for (c = 0; c < v2.length; c++) {
	if (v1.indexOf(v2[c]) == -1) {
		r[c] = v2[c];
	}
}
alert("Segundo vetor sem os elementos do primeiro:\n" + r.join(" "));

/* ------------------------------------------------------- */

var l = Number(prompt("Digite o tamanho dos vetores:")),
	v1 = [],
	v2 = [],
	dif = [],
	v3 = [],
	v4 = [];
for (c = 0; c < l; c++) {
	v1[c] = Number(prompt("Digite um número para o vetor A: "));
}
for (c = 0; c < l; c++) {
	v2[c] = Number(prompt("Digite um número para o vetor B:"));
}
v3 = v1.concat(v2);
for (i = 0; i < v3.length; i++) {
	if (v3.indexOf(v3[i], (i + 1)) != -1) {
		v3.splice(v3.indexOf(v3[i], (i + 1)), 1);
	}
}
for (i = 0; i < l; i++) {
	if (v1.indexOf(v2[i]) != -1) {
		v4[i] = v2[i];
	}
}
for (c = 0; c < v1.length; c++) {
	if (v2.indexOf(v1[c]) == -1) {
		dif[c] = v1[c];
	}
}
alert("A U B = " + v3.join(", ") + "\nA inter B = " + v4.join(", ") + "\nA - B = " + dif.join(", "));
