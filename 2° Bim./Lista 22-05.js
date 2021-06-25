/*
1.
Criar um programa que calcule as calorias de uma refeição do usuário em relação ao prato, a sobremesa e a bebida.
*/

var prato=prompt("Escolha seu prato:\n1-Vegetariano\n2-Peixe\n3-Carne\n4-Frango");
if (prato=="1" || prato=="Vegetariano") {
    prato=180
    alert("Você irá consumir 180 calorias no prato.")
}
if (prato=="2" || prato=="Peixe") {
    prato=230
    alert("Você irá consumir 230 calorias no prato.")
}
if (prato=="3" || prato=="Carne") {
    prato=350
    alert("Você irá consumir 350 calorias no prato.")
}
if (prato=="4" || prato=="Frango") {
    prato=250
    alert("Você irá consumir 250 calorias no prato.")
}
var sobre=prompt("Escolha sua sobremesa:\n1-Brigadeiro(100g)\n2-Morango com Chocolate(100g)\n3-Romeu e Julieta(100g)\n4-Mousse(100g)");
if (sobre=="1" || sobre=="Brigadeiro") {
    sobre=360
    alert("Você irá consumir 360 calorias na sobremesa.")
}
if (sobre=="2" || sobre=="Morango com Chocolate") {
    sobre=330
    alert("Você irá consumir 330 calorias na sobremesa.")
}
if (sobre=="3" || sobre=="Romeu e Julieta") {
    sobre=270    
    alert("Você irá consumir 270 calorias na sobremesa.")
}
if (sobre=="4" || sobre=="Mousse") {
    sobre=225
    alert("Você irá consumir 225 calorias na sobremesa.")
}
var drink=prompt("Escolha seu prato:\n1-Refrigerante\n2-Suco Natural\n3-Água\n4-Refrigerante Diet");
if (drink=="1" || drink=="Refrigerante") {
    drink=300
    alert("Você irá consumir 300 calorias na bebida.")
}
if (drink=="2" || drink=="Suco Natural") {
    drink=300
    alert("Você irá consumir 70 calorias na bebida.")
}
if (drink=="3" || drink=="Água") {
    drink=0
    alert("Você irá consumir 0 calorias na bebida.")
}
if (drink=="4" || drink=="Refrigerante Diet") {
    drink=20
    alert("Você irá consumir 20 calorias na bebida.")
}
alert("Você consumiu "+(prato+sobre+drink)+" calorias no total.")



/*
2.
Jo-Ken-Po
*/

var p=prompt("Jo-Ken-Po!\n1-Pedra\n2-Papel\n3-Tesoura");
var pc=parseInt(Math.random()*3)
if (pc==0 && p=="1") {
    alert("Empate! O computador também escolheu pedra!")
}
if (pc==0 && p=="2") {
    alert("Você ganhou! O computador escolheu pedra!")
}
if (pc==0 && p=="3") {
    alert("Você perdeu! O computador escolheu pedra!")
}
if (pc==1 && p=="1") {
    alert("Você perdeu! O computador escolheu papel!")
}
if (pc==1 && p=="2") {
    alert("Empate! O computador também escolheu papel!")
}
if (pc==1 && p=="3") {
    alert("Você ganhou! O computador escolheu papel!")
}
if (pc==2 && p=="1") {
    alert("Você ganhou! O computador escolheu tesoura!")
}
if (pc==2 && p=="2") {
    alert("Você perdeu! O computador escolheu tesoura!")
}
if (pc==2 && p=="3") {
    alert("Empate! O computador também escolheu tesoura!")
}
