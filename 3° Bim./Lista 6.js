/*
1.
Leia uma sequência de N números inteiros e mostre essa sequência ao contrário, no final de sua execução.
O valor de N deve ser informado pelo usuário.
*/

var N = Number(prompt("Digite o limite:")),
	v = [];
for (c = N - 1; c >= 0; c--) {
	v[c] = prompt("Digite um número:");
}
alert(v);



/*
2.
Leia a pontuação de N times de um campeonato de futebol.
O programa deve mostrar, ao final, qual a pontuação dos campeões, bem como mostrar quantos times dividiram o título.
*/

var N = Number(prompt("Digite quantos times estão no campeonato: ")),
	v = [],
	ma = 0,
	qc = 0;
for (c = 0; c < N; c++) {
	v[c] = Number(prompt("Digite a pontuação do time:"));
	if (c = 0) {
		ma = v[c];
	}
	if (v[c] > ma) {
		ma = v[c];
	}
}
c = N - 1;
while (c >= 0) {
	if (v[c] == ma) {
		qc++;
	}
	c--;
}
alert("Os " + qc + " campeões fizeram " + ma + " pontos.");



/*
3.
Peça ao usuário 10 números, calcule e mostre a média desses 10 números e mostre ainda quantos, desses números, são maiores que a média.
*/

var v = [],
	s = 0,
	qacm = 0;
for (c = 0; c < 10; c++) {
	v[c] = Number(prompt("Digite um número:"));
	s += v[c];
}
for (c = 0; c < 10; c++) {
	if (v[c] > s / 10) {
		qacm++;
	}
}
alert("A média dos dez números é: " + s / 10 + ".\n" + qacm + " números estão acima da média.");



/*
4.
Leia um vetor com dez números reais, calcule e mostre a quantidade de números negativos e a soma dos números positivos desse vetor.
*/

var v = [],
	qn = 0,
	sp = 0;
for (c = 0; c < 10; c++) {
	v[c] = Number(prompt("Digite um número:"));
	if (v[c] < 0) {
		qn++;
	}
	if (v[c] > 0) {
		s += v[c];
	}
}
alert("A quantidade de números negativos: " + qn + ".\nA soma dos positivos: " + sp + ".");



/*
5.
Leia um vetor com 15 posições, calcule e mostre:
a) O maior elemento do vetor e em que posição esse elemento se encontra;
b) O menor elemento do vetor e em que posição esse elemento se encontra.
*/

var v = [],
	ma = 0,
	me = 0,
	pme = 0,
	pma = 0,
	c = 0;
while (c < 15) {
	v[c] = Number(prompt("Digite um número:"));
	if (c == 0) {
		ma = v[c];
		me = v[c];
	}
	if (v[c] > ma) {
		ma = v[c];
		pma = c;
	}
	if (v[c] < me) {
		me = v[c];
		pme = c;
	}
	c++;
}
alert("O maior elemento, " + ma + " está na posição " + pma + ".\nO menor elemento, " + me + " está na posição " + pme + ".");



/*
6.
Leia 2 vetores de 10 posições e some os elementos de mesma posição e armazene o resultado em um terceiro vetor (também de 10 posições).
*/

var v1 = [],
	v2 = [],
	v3 = [];
for (c = 0; c < 10; c++) {
	v1[c] = Number(prompt("Digite um número para o primeiro vetor:"));
}
for (c = 0; c < 10; c++) {
	v2[c] = Number(prompt("Digite um número para o segundo vetor:"));
}
for (c = 0; c < 10; c++) {
	v3[c] = v1[c] + v2[c];
}
alert(v3);



/*
7.
Leia um vetor de 20 posições e uma variável A.
A seguir, armazene em um outro vetor o produto da variável A pelo primeiro vetor.
*/

var v1 = [],
	A = Number(prompt("Digite A:")),
	v2 = [];
for (c = 0; c < 20; c++) {
	v1[c] = Number(prompt("Digite um número:"));
}
for (c = 0; c < 20; c++) {
	v2[c] = v1[c] * A;
}
alert(v2);



/*
8.
Um time de basquete possui 12 jogadores.
Elabore um programa que leia dois vetores NOME e ALTURA, calcule e imprima o nome do jogador mais alto e a sua altura.
*/

var NOME = [],
	ALTURA = [],
	ma = 0,
	nma;
for (c = 0; c < 12; c++) {
	NOME[c] = prompt("Digite o nome do " + (c + 1) + "º jogador:");
	ALTURA[c] = Number(prompt("Digite a altura (em metros) de " + NOME[c] + ":"));
	if (c == 0) {
		ma = ALTURA[c];
		nma = NOME[c];
	}
	if (ALTURA[c] > ma) {
		ma = ALTURA[c];
		nma = NOME[c];
	}
}
alert(nma + " é o jogador mais alto, com " + ma.toFixed(2) + "m de altura.");



/*
9.
Dados três vetores reais de 5 posições, leia estes vetores (usando uma estrutura de repetição), calcule a expressão ((vetor1 * vetor3) / vetor2 ), utilizando os valores da mesma posição, armazenando em um quarto vetor, também de números reais de 5 posições. 
No final, imprima os números do quarto vetor.
*/

var v1 = [],
	v2 = [],
	v3 = [],
	v4 = [];
for (c = 0; c < 5; c++) {
	v1[c] = Number(prompt("Digite um número para o vetor 1:"));
}
for (c = 0; c < 5; c++) {
	v2[c] = Number(prompt("Digite um número para o vetor 2:"));
}
for (c = 0; c < 5; c++) {
	v3[c] = Number(prompt("Digite um número para o vetor 3:"));
}
for (c = 0; c < 5; c++) {
	v4[c] = (v1[c] * v3[c]) / v2[c];
}
alert(v4.join(", "));



/*
10.
Leia um conjunto de 30 valores e os coloque em 2 vetores conforme estes valores forem pares ou ímpares. 
O tamanho dos vetores é de 15 posições. 
Se algum vetor estiver cheio, escrever uma mensagem informando que o vetor já está cheio. 
Terminada a leitura, escrever o conteúdo dos dois vetores.
*/

var v = [],
	vp = [],
	vi = [],
	qap = 0,
	qai = 0;
for (c = 0; c < 30; c++) {
	v[c] = Number(prompt("Digite um número inteiro:"));
}
for (i = 0; i < 30; i++) {
	if (v[i] % 2 == 0) {
		if (vp.length < 15) {
			vp.push(v[i]);
		} else if (qap < 1) {
			alert("O vetor dos números pares está cheio.");
			qap++;
		}
	} else {
		if (vi.length < 15) {
			vi.push(v[i]);
		} else if (qai < 1) {
			alert("O vetor dos números ímpares está cheio.");
			qai++;
		}
	}
}
alert("Ímpares: " + vi.join(", ") + "\nPares: " + vp.join(", "));



/*
11.
Leia um vetor de 20 posições e mostre- o.
Em seguida, troque o primeiro elemento com o último, o segundo com o penúltimo, o terceiro com o antepenúltimo, e assim sucessivamente.
Mostre o novo vetor depois da troca.
*/

var v = [];
for (c = 0; c < 20; c++) {
	v[c] = prompt("Digite o " + (c + 1) + "° elemento do vetor:");
}
alert(v.join(" "));
alert(v.reverse().join(" "));
