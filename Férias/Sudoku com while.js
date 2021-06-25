/*

TRABALHO REALIZADO NO 2° BIMESTRE E APRIMORADO COM WHILE DURANTE AS FÉRIAS

*/

var A1 = "_1_|",
	A2 = "___|",
	A3 = "___|",
	A4 = "___|",
	B1 = "___|",
	B2 = "___|",
	B3 = "_2_|",
	B4 = "___|",
	C1 = "___|",
	C2 = "___|",
	C3 = "___|",
	C4 = "___|",
	D1 = "___|",
	D2 = "_3_|",
	D3 = "___|",
	D4 = "___|";
alert("Olá, vamos jogar uma partida de Sudoku? Eu irei te apresentar o jogo e direi como você irá jogar.");
alert("1-O jogo começará neste tabuleiro:\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4 + "\n2-A cada rodada eu irei perguntar em qual casa você gostaria de jogar(ex:D1) e qual número(de 1 a 4) você gostaria de colocar nesta casa.\n3-Ao final de cada rodada eu irei te mostrar a nova tabela e irei pedir sua nova jogada.\n4-Não pode existir, na mesma linha ou coluna, dois números iguais.\n5-Caso você erre, eu irei avisar você para que possa corrigir o erro.\n6-Caso você erre três vezes você perderá o jogo.\n7-Caso você não queira mais jogar digite 'não' e você não estará mais no jogo.\n7-Você também pode mudar algum número jogado ateriormente, mas apenas 5 vezes.\n8-Você não poderá mudar as posições predefinidas.\n\nÉ isso, se divirta e tenha um bom jogo!");
var err = 0;
var N = "";
var P = prompt("     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4 + "\n\nDigite a posição na qual você irá jogar:");
while (err < 3 && P != "não" && N != "não") {
	N = prompt("     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4 + "\n\nDigite o número que você irá jogar:");
	if (P == "A2") {
		A2 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (A2 == A1 || A2 == A3 || A2 == A4 || A2 == B2 | A2 == C2 || A2 == D2) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "A3") {
		A3 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (A3 == A1 || A3 == A2 || A3 == A4 || A3 == B3 | A3 == C3 || A3 == D3) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "A4") {
		A4 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (A4 == A1 || A4 == A2 || A4 == A3 || A4 == B4 | A4 == C4 || A4 == D4) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "B1") {
		B1 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (B1 == B2 || B1 == B3 || B1 == B4 || B1 == A1 || B1 == C1 || B1 == D1) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "B2") {
		B2 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (B2 == B1 || B2 == B3 || B2 == B4 || B2 == A2 || B2 == C2 || B2 == D2) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "B4") {
		B4 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (B4 == B2 || B4 == B3 || B4 == B1 || B4 == A4 || B4 == C4 || B4 == D4) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "C1") {
		C1 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (C1 == C2 || C1 == C3 || C1 == C4 || C1 == A1 || C1 == B1 || C1 == D1) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "C2") {
		C2 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (C2 == C1 || C2 == C3 || C2 == C4 || C2 == A2 || C2 == B2 || C2 == D2) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "C3") {
		C3 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (C3 == C2 || C3 == C1 || C3 == C4 || C3 == A3 || C3 == B3 || C3 == D3) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "C4") {
		C4 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (C4 == C2 || C4 == C3 || C4 == C1 || C4 == A4 || C4 == B4 || C4 == D4) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "D1") {
		D1 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (D1 == D2 || D1 == D3 || D1 == D4 || D1 == A1 || D1 == B1 || D1 == C1) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "D3") {
		D3 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (D3 == D2 || D3 == D1 || D3 == D4 || D3 == A3 || D3 == B3 || D3 == C3) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (P == "D4") {
		D4 = "_" + N + "_|";
		alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
		if (D4 == D2 || D4 == D3 || D4 == D1 || D4 == A4 || D4 == B4 || D4 == C4) {
			err++;
			if (err < 3) {
				alert("Você errou! Tente novamente!");
			}
			if (err == 3) {
				alert("Você errou três vezes! Você perdeu!");
				break;
			}
		}
	}
	if (A2 != "___|" && A3 != "___|" && A4 != "___|" && B1 != "___|" && B2 != "___|" && B4 != "___|" && C1 != "___|" && C2 != "___|" && C3 != "___|" && C4 != "___|" && D1 != "___|" && D3 != "___|" && D4 != "___|" && err < 3) {
		alert("Parabéns! Você venceu!");
		break;
	}
	P = prompt("     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4 + "\n\nDigite a posição na qual você irá jogar:");
}
if (P == "não" || N != "não") {
	alert("ata, xau!");
}
