//1. Série de números: 1,4,9,16,25,36...Mostrar o número na N-ésima posição
var N=Number(prompt("Digite a posição desejada:"));
var c=1;
var q=c*c;
var x=q;
while (c<N) {
    c++;
    q=c*c;
    x+=", "+q;
}
alert(x)



//2. Ler até digitar zero, apresentar o maior e o menor

var N=Number(prompt("Digite um número:"));
var ma=N;
var me=N;
while (N!=0 && N!=0) {
    if (N>ma) {
        ma=N;
    }
    if (N<me) {
        me=N;
    }
    N=Number(prompt("Digite um outro número:"));
}
alert("O maior: "+ma+" e o menor: "+me)



//3. Transformar decimal em binário

var N=parseInt(prompt("Digite um número inteiro:"));
var x=N
var R=N%2;
var Q=Math.floor(N/2);
var A="";
while (Q!=0){
	R=N%2;
	Q=Math.floor(N/2);
	N=Q;
	A=""+R + A;
}
alert(x+" em números binários é "+A);
