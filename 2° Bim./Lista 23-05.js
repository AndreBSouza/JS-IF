//1.
var res;
var op=prompt("Digite a operação a ser efetuada(+, -, *, /, ^ ou v¬):");
switch (op) {
    case "+":
        var n1=Number(prompt("Digite o primeiro número:"));
        var n2=Number(prompt("Digite o segundo número:"));
        alert(n1+n2)
        break;
    case "-":
        var n1=Number(prompt("Digite o primeiro número:"));
        var n2=Number(prompt("Digite o segundo número:"));
        alert(n1-n2);
        break;
    case "*":
        var n1=Number(prompt("Digite o primeiro fator:"));
        var n2=Number(prompt("Digite o segundo fator:"));
        alert(n1*n2);
        break;
    case "/":
        var n1=Number(prompt("Digite o dividendo:"));
        var n2=Number(prompt("Digite o divisor:"));
        alert(n1/n2);
        break;
    case "v¬":
        var n1=Number(prompt("Digite o radicando:"));
        var n2=Number(prompt("Digite o índice:"));
        alert(n1**(1/n2))
        break;
    case "^":
        var n1=Number(prompt("Digite a base:"));
        var n2=Number(prompt("Digite o expoente"));
        alert(n1**n2)
        break;
}



//2.
var mes=prompt("Digite um desses:\n1-Janeiro\n2-Fevereiro\n3-Março\n4-Abril\n5-Maio\n6-Junho\n7-Julho\n8-Agosto\n9-Setembro\n10-Outubro\n11-Novembro\n12-Dezembro");
switch (mes) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        alert("Este mês tem 31 dias!")
        break;
    case "2":
        alert("Este mês tem 28 dias (29 se bissexto)!")
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        alert("Este mês tem 30 dias!")
        break;
}



/*
drones pra entrega de caixas
cada caixa= paralelepípedo retângulo
uma caixa de cada vez
entrega pela janela
app visão computacional
calcular janela
uma das faces paralela á janela
girar e rotacionar a caixa
ler alt, larg janela e dimen caixa
dizer se a caixa passa pela janela
*/

var altjan=Number(prompt("Digite a altura da janela:"));
var largjan=Number(prompt("Digite a largura da janela:"));
var altcx=Number(prompt("Digite a altura da caixa:"));
var largcx=Number(prompt("Digite a largura da caixa:"));
var profcx=Number(prompt("Digite a profundidade da caixa:"));
if ((altjan>altcx && (altjan>largcx || altjan>profcx))||(largjan>altcx && (largjan>largcx || largjan>profcx))) {
    alert("A caixa passa pela janela!")
} else {
    alert("A caixa não passa pela janela!")
}
