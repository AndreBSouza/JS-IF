/*
Exemplo:
Apresentar os resultados de uma tabuada de um número qualquer, a qual deve ser mostrada no seguinte formato, considerando como exemplo o fornecimento do número 2:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
(...)
2 x 10 = 20

COM FOR
*/

var N = Number(prompt("Digite um número:"));
var tabu = "***TABUADA DO " + N + "***";
for (var c = 1; c < 11; c++) {
    tabu += "\n" + N + " x " + c + " = " + (N * c)
}
alert(tabu)

for (var c1 = 1; c1 < 11; c1++) {
    console.log("***TABUADA DO " + c1 + "***")
    for (var c2 = 1; c2 < 11; c2++) {
        console.log(c1 + " x " + c2 + " = " + (c1 * c2));
    }
    console.log("");
}



/*
1.
Elaborar um programa que leia um número e exiba asteriscos na página, em linhas diferentes.
A cada nova linha o número deverá ser incrementado.
Ex:
N=5
*
**
***
****
*****
*/

var N = parseInt(prompt("Digite um número:"));
var c = ""
for (var x = 0; x < N; x++) {
    c += "*"
    console.log(c)
}



/*
2.
Criar um programa que leia um número e mostre se ele é ou não é perfeito. 
Um número perfeito é aquele que é igual a soma dos seus divisores inteiros(exceto o próprio número).
O programa deve exibir os divisores do número e a soma deles. 
Ex: 28 (1, 2, 4, 7, 14); 6 (1, 2, 3)
*/

var N = parseInt(prompt("Digite um número: "));
var x = "( ";
var a = 0;
for (var d = 0; d < N; d++) {
    if (N % d == 0) {
        x += d + " ";
        a += d;
    }
}
if (a == N) {
    alert("É um número perfeito!\n" + a + " " + x + ")");
} else {
    alert("Não é um número perfeito!\n" + a + " " + x + ")");
}
