//1. mostrar os n primeiros números primos
var n = parseInt(prompt("Digite o número de primos que tu quer:"));
var qn = 0
for (var d = 0; d < N; d++) {
    if (N % d == 0) {
        qn++
    }
}
//RESOLUÇÃO: PEGA OS DIVISORES DOS NÚMEROS E COLOCA UM CONTADOR NOS QUE TEM SÓ DOIS AAAAAAAAAAAAAAAAAA




//2. os divisores de 12 são 1, 2, 3, 4, 6 e 12. o maior divisor de 12 que não excede a raiz quadrada de 12 é 3. podemos chamar o maior divisor de um inteiro n que não excede a raiz quadrada de n de pseudo raiz quadrada(PRQ). faça um programa que calcule PRQ sem usar funções matemáticas.
var n = parseInt(prompt("Digite um número: "));
for (var d = 0; d < N; d++) {
    if (N % d == 0) {
        qn++
    }
}

//3. calcular potenciação sem funções matemáticas
var N1 = parseInt(prompt("Digite a base:"));
var N2 = parseInt(prompt("Digite o expoente:"));
var a = N1;
for (var x = 1; x < N2; x++) {
    a *= N1;
}
alert(N1 + " ^ " + N2 + " = " + a);
