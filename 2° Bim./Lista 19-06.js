//1.definir limite e mostrar números de 1 até este limite

var lim=Number(prompt("Digite o valor máximo:"));
var N=1;
while(N<=lim){
  alert(N);
  N++;
}



//2.ler vários e parar o negativo, e mostrar a soma de todos

var N=Number(prompt("Digite um valor:"));
var c=0
while (N>=0) {
  c+=N;
  N=Number(prompt("Digite outro valor:"));
}
alert(c);



//3.

var SP=0
var QI=0
var QN=0
var SN=0
var N=Number(prompt("Digite um número:"));
while (N!=0){
  QN++;
  if((N%2)==0){
    SP+=N;
  }
  if((N%2)!=0){
    QI++;
  }
  SN+=N;
  N=Number(prompt("Digite um outro número:"));
}
var M=SN/QN;
alert("~A soma dos pares é: "+SP+"\n~A quantidade de ímpares é: "+QI+"\n~A média de todos os números é: "+M);
