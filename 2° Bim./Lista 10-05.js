/*
1.
Faça um programa para ler dois números e uma operação matemática(+, -, * ou /) e que ao final mostre o resultado.
*/
var op=prompt("Digite a operação a ser efetuada(+, -, *, /, ^ ou v¬):");
if (op=="/"){
  var n1=Number(prompt("Digite o dividendo:"));
  var n2=Number(prompt("Digite o divisor:"));
  alert(n1/n2)
}
if (op=="*"){
  var n1=Number(prompt("Digite o primeiro fator:"));
  var n2=Number(prompt("Digite o segundo fator:"));
  alert(n1*n2)
}
if (op=="+"){
  var n1=Number(prompt("Digite o primeiro número:"));
  var n2=Number(prompt("Digite o segundo número:"));
  alert(n1+n2)
}
if (op=="-"){
  var n1=Number(prompt("Digite o primeiro número:"));
  var n2=Number(prompt("Digite o segundo número:"));
  alert(n1-n2)
}
if (op=="^") {
  var n1=Number(prompt("Digite a base:"));
  var n2=Number(prompt("Digite o expoente"));
  alert(n1**n2)
}
if (op=="v¬") {
  var n1=Number(prompt("Digite o radicando:"));
  var n2=Number(prompt("Digite o índice:"));
  alert(n1**(1/n2))
}





/*
2.
Crie um programa que calcule o IMC de uma pessoa, pedindo o peso e a altura desta.
*/
var P=Number(prompt("Digite seu peso(em quilogramas):"));
var A=Number(prompt("Digite sua altura(em metros):"));
alert("Seu IMC é de "+IMC.toFixed(2))
var IMC=P/(A**2)
if (IMC<20) {
  alert("Você está abaixo do peso!")
}
if (IMC>=20 && IMC<25) {
  alert("Você está com peso normal!")
}
if (IMC>=25 && IMC<30) {
  alert("Você está com sobrepeso!")
}
if (IMC>=30 && IMC<40) {
  alert("Você é obeso!")
}
if (IMC>40) {
  alert("Você é obeso mórbido!")
}





/*
3.
Dois amigos, Alice e Bob, estão jogando um jogo muito simples, em que um deles grita ou "par" ou "ímpar" e o outro imediatamente responde ao contrário, respectivamente "ímpar" ou "par". Em seguida, ambos exibem ao mesmo tempo uma mão cada um, em que alguns dedos estão estendidos e outros dobrados. Então eles contam o número total de dedos estendidos. Se a soma for par, quem gritou "par" ganha. Se a soma for ímpar, quem gritou "ímpar" ganha.
Por exemplo, suponhamos que a Alice gritou "par" e o Bob respondeu "ímpar". Em seguida, Alice não deixou nenhum dos seus dedos estendidos, ao passo que Bob deixou três dedos estendidos. A soma então é três, que é ímpar, portanto Bob ganhou.
Seu programa deve determinar quem ganhou, tendo a informação de quem gritou par e o número de dedos estendidos de cada um.
Devem ser lidos três números inteiros, P, D_1 e D_2, nesta ordem. Se P = 0 então Alice gritou "par", ao passo que se P=1 então Bob gritou "par". Os números D_1 e D_2 indicam, respectivamente, o número de dedos estendidos da Alice e do Bob.
Retornar 0 se Alice foi a ganhadora, ou 1 se Bob foi o ganhador.
*/
var P=parseInt(prompt("Digite quem gritou par(0 para Alice e 1 para Bob):"));
var D_1=parseInt(prompt("Digite o número que Alice jogou:"));
var D_2=parseInt(prompt("Digite o número que Bob jogou:"));
if (P==0 && (D_1+D_2)%2==0) {
  alert("0")
}
if (P==1 && (D_1+D_2)%2==0) {
  alert("1")
}
if (P==0 && (D_1+D_2)%2!=0) {
  alert("1")
}
if (P==1 && (D_1+D_2)%2!=0) {
  alert("0")
}
