//1. Peça uma palavra e apresente ela ao contrário.

var p = prompt("Digite uma palavra:");
var x = "";
for (var c = (Number(p.length)) - 1; c >= 0; c--) {
	x += p[c];
}
alert(x + " ao contrário é " + x);



//2. Peça uma palavra e apresente ela ao contrário e maiúscula.

var p = prompt("Digite uma palavra:");
var x = "";
for (var c = (Number(p.length)) - 1; c >= 0; c--) {
	x += p[c];
}
alert(x + " ao contrário e maiúsculo/a é " + x.toUpperCase());



//3. Álbum da Copa - OBI - Nível Júnior - Fase 1
var N = parseInt(prompt("Digite o número de figurinhas que devem ser coladas no álbum para ele ser completo:"));
var M = parseInt(prompt("Digite o número de figurinhas que vc tem:"));
var p, x = "",
	a = M;
for (var c = 0; c < M; c++) {
	p = parseInt(prompt("Digite o número dessa figurinha:"));
	x += p;
	if (p == x[x.indexOf(p, x.indexOf(p) + 1)]) {
		a--;
	}
}
alert("Vc precisa de mais " + (N - a) + " figurinhas para completar o seu álbum.");
