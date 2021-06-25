/*
1.
Elaborar um programa que leia o nome completo de um aluno.
O programa deve validar o preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome seguido pelo número de vogais do nome completo dele.
O programa deve conter as funções:
- validarNome() - que receba um nome como parâmetro e retorne true (nome completo) ou false (nome incompleto)
- obterSobrenome() - que receba um nome como parâmetro e retorne o último nome do aluno em letras minúsculas
- contarVogais() - que receba um nome e retorne o número de vogais deste, com dois dígitos.
*/

function validarNome(nome) {
	if (nome.length < 3) {
		return false;
	} else {
		return true;
	}
}

function obterSobrenome(nome) {
	var v = nome.split(" "),
		l = v.length,
		s = v[(l - 1)];
	return s.toUpperCase();
}

function contarVogais(nome) {
	var i = 0;
	for (c = 0; c < nome.length; c++) {
		if (nome[0] == "a" || nome[0] == "e" || nome[0] == "i" || nome[0] == "o" || nome[0] == "u") {
			i++;
		}
	}
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
var nome = prompt("Digite seu nome:");
alert(validarNome(nome) + "\n" + obterSobrenome(nome) + "" + contarVogais(nome));



/*
2.
Elaborar um programa para uma clínica veterinária, que leia o preço de uma vacina e se o cliente possui ou não convênio.
Caso possua algum convênio exibir as opções "1-Amigo dos Animais" e "2-Saúde Animal".
O programa deve exibir o valor do desconto (10% sem convênio; 20% para "Amigo dos Animais"; 50% para Saúde Animal") e o valor a ser pago.
Criar a função:
- calcularDesconto() - que recebe como parâmetro valor e taxa de desconto.
Retornar o valor do desconto.
*/

function calcularDesconto(valor, taxa) {
	var xx = valor - (valor * (taxa / 100));
	return xx;
}
var valor = Number(prompt("Digite o preço da vacina:")),
	p = prompt("O cliente possui convênio?\n\nSe sim, qual destes?\n1-Amigo dos Animais\n2-Saúde Animal"),
	taxa;
if (p == "1" || p.toLowerCase() == "amigo dos animais") {
	taxa = 20;
} else if (p == "2" || p.toLowerCase() == "saúde animal" || p.toLowerCase == "saude animal") {
	taxa = 50;
} else {
	taxa = 10;
}
alert(taxa + "% de desconto.\nValor a ser pago: R$" + (calcularDesconto(valor, taxa)).toFixed(2) + ".");



/*
3.
Elaborar um programa que leia o nome e a idade de um atleta de um clube de natação.
O programa deve exibir o nome com "-" abaixo das letras do nome e a categoria do atleta, que pode ser "Infantil" (até 12 anos), "Juvenil" (entre 13 e 18 anos) ou "Adulto" (acima de 18 anos).
O programa deve conter as funções:
- retornarTracos() - que receba um nome como parâmetro e retorne uma linha com "-" para as letras do nome (nos espaços, manter os espaços).
- categorizarAluno() - que receba um número como parâmetro e retorne a categoria do aluno.
*/

function retornarTracos(nome) {
	var v = nome.split(" "),
		l, s;
	for (c = 0; c < v.length; c++) {
		l = v[c].length;
		v[c] = "-".repeat(l);
	}
	s = v.join(" ");
	return s;
}

function categorizarAluno(idade) {
	if (idade <= 12) {
		return "Infantil";
	} else if (idade >= 13 && idade <= 18) {
		return "Juvenil";
	} else if (idade > 18) {
		return "Adulto";
	}
}
var nome = prompt("Digite o nome de atleta:"),
	idade = Number(prompt("Digite a idade de " + nome + ":"));
alert(nome + "\n" + retornarTracos(nome) + " " + categorizarAluno(idade));


/*
4.
Precisamos saber se um personagem morreu ou não depois de sofrer um ataque.
Faça uma função que receba 2 parâmetros, DANO e SAUDE.
A função deve retornar verdadeiro se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e falso caso contrário.
*/

function vivo(dano, saude) {
	var x = saude - dano;
	if (x > 0) {
		return true;
	} else {
		return false;
	}
}
var saude = Number(prompt("Digite a saude atual:")),
	dano = Number(prompt("Digite o dano recebido:"));
alert(vivo(dano, saude));



/*
5.
Temos um vetor de 5 posições, com o nome de 5 itens que nosso herói carrega na mochila.
Quando o personagem chega numa porta, queremos detectar automaticamente se ele tem ou não uma chave para deixá-lo passar.
Crie uma função temChave que percorre o vetor comparando se cada item tem o nome “chave” e retorne verdadeiro se encontrar alguma.
Caso contrário, a função deve retornar falso.
*/

function temChave(v) {
	if (v.indexOf("chave") != -1) {
		return true;
	} else {
		return false;
	}
}
var v = [];
for (c = 0; c < 5; c++) {
	v[c] = prompt("Digite o item:");
}
alert(temChave(v));



/*
6.
Precisamos limitar as posições em que um inimigo pode andar na tela.
A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela.
Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.
*/

function LimitaPosicao(posicao) {
	if (posicao < 0 || posicao > 100) {
		posicao = Math.floor(Math.random() * 101);
	}
	return posicao;
}
var posicao = Number(prompt("Digite a posição:"));
alert(LimitaPosicao(posicao));
