alert("Olá, vamos jogar senha?\nVou te mostrar como jogar.");
alert("1 - O jogo (perdi) consiste em uma palavra gerada de forma 'aleatória' que deve ser 'adivinhada' pelo jogador, no caso, você.\n2 - A cada rodada irei te pedir uma nova palavra, para você tentar acertar a palavra sorteada.\n3 - Há três níveis de dificuldade no jogo, o nível fácil (a senha terá quatro letras e você terá dez tentativas para acertá-la), o nível médio (a senha terá cinco letras e você terá quinze tentativas para acertá-la) e o nível difícil (a senha terá seis letras e você terá quinze tentativas para acertá-la).\n4 - Após cada jogada sua eu irei te mostrar a palavra que você digitou (PAL.), quantas letras você acertou (AC.) e quantas letras estão na posição certa (POS.).\n5 - Você pode pedir pedir dicas ao longo do jogo, toda vez que digitar a palavra 'dica' eu lhe darei as opções de dicas para você, mas você só pode pedir 1 dica no modo fácil e 2 nos modos médio e difícil.\n6 - Acentos são levados em consideração para conferir a palavra.\n7 - Você pode sair/reiniciar do jogo se não digitar alguma palavra e teclar ENTER.\nEspero que goste do jogo e se divirta!");
var x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
var xx = "sim";
var cdica = 0;
while (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
    if (x == "1" || x.toLowerCase() == "Fácil".toLowerCase() || x.toLowerCase() == "facil") {
        cdica = 0;
        var f = "bola bolo faca vaca amor ódio meta galo gado liga copa taça data rede sala jogo pote auge aula mais foca lobo gato pato pata foco tato fada fato lata"
        do {
            var a = f.substr((Math.floor(Math.random() * 146)), 4);
        } while (a.indexOf(" ") != -1);
        var ac = 0,
            pos = 0;
        var p = prompt("Digite uma palavra de 4 letras:");
        var al = "PAL.  AC.  POS.";
        for (var c = 10; p != a && c > 0 && p != ""; c--) {
            if ((p.indexOf((a[0].toLowerCase())) != -1 || p.indexOf((a[0].toUpperCase())) != -1) && p != "dica") {
                ac++;
            }
            if (((p[0]).toLowerCase() == (a[0]).toLowerCase()) && p != "dica") {
                pos++;
            }
            if ((p.indexOf((a[1].toLowerCase())) != -1 || p.indexOf((a[1].toUpperCase())) != -1) && p != "dica") {
                ac++;
            }
            if (((p[1]).toLowerCase() == (a[1]).toLowerCase()) && p != "dica") {
                pos++;
            }
            if ((p.indexOf((a[2].toLowerCase())) != -1 || p.indexOf((a[2].toUpperCase())) != -1) && p != "dica") {
                ac++;
            }
            if (((p[2]).toLowerCase() == (a[2]).toLowerCase()) && p != "dica") {
                pos++;
            }
            if ((p.indexOf((a[3].toLowerCase())) != -1 || p.indexOf((a[3].toUpperCase())) != -1) && p != "dica") {
                ac++;
            }
            if (((p[3]).toLowerCase() == (a[3]).toLowerCase()) && p != "dica") {
                pos++;
            }
            if (p == "dica") {
                if (cdica < 1) {
                    xxx = prompt("Qual letra você quer que seja revelada?\nDigite a sua posição (1, 2, 3 ou 4).")
                    alert("A letra na " + xxx + "° posição é " + a[(xxx - 1)] + ".");
                    cdica++;
                } else {
                    alert("Você não pode mais usar dicas, pois ultrapassou o limite.");
                }
                c++;
            }
            if (p.length != 4) {
                alert("Digite uma palavra válida.");
            } else if (p != "dica") {
                al += "\n" + p + "  " + ac + "      " + pos;
            }
            p = prompt(al + "\nVocê tem " + c + " tentativas restantes.\n-Digite outra palavra de 4 letras:");
            ac = 0, pos = 0;
        }
        if (p == "") {
            xx = prompt("Você quer continuar jogando?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        } else if (a.toLowerCase() == p.toLowerCase()) {
            xx = prompt("Parabéns! Você acertou!\nA palavra era " + a + ".\nDeseja jogar novamente?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        } else {
            xx = prompt("Você ultrapassou o limite de tentativas.\nA palavra era " + a + ".\nDeseja jogar novamente?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        }
    } else if (x == "2" || x.toLowerCase() == "Médio".toLowerCase() || x.toLowerCase() == "medio") {
        cdica = 0;
        var m = "porta carro matar falar jogar gasto vigor fator sagaz sutil plena nobre festa ganho caixa tarja preto carne carta fruta garfo lápis tinta fácil médio prato prata carga chave papel"
        do {
            var a = m.substr((Math.floor(Math.random() * 174)), 5);
        } while (a.indexOf(" ") != -1);
        var ac = 0,
            pos = 0;
        var p = prompt("Digite uma palavra de 5 letras:");
        var al = "PAL.   AC.  POS.";
        for (var c = 15; p != a && c > 0 && p != ""; c--) {
            if (p == "dica") {
                p += "-";
            }
            if ((p.indexOf((a[0].toLowerCase())) != -1 || p.indexOf((a[0].toUpperCase())) != -1) && p != "dica-") {
                ac++;
            }
            if (((p[0]).toLowerCase() == (a[0]).toLowerCase()) && p != "dica-") {
                pos++;
            }
            if ((p.indexOf((a[1].toLowerCase())) != -1 || p.indexOf((a[1].toUpperCase())) != -1) && p != "dica-") {
                ac++;
            }
            if (((p[1]).toLowerCase() == (a[1]).toLowerCase()) && p != "dica-") {
                pos++;
            }
            if ((p.indexOf((a[2].toLowerCase())) != -1 || p.indexOf((a[2].toUpperCase())) != -1) && p != "dica-") {
                ac++;
            }
            if (((p[2]).toLowerCase() == (a[2]).toLowerCase()) && p != "dica-") {
                pos++;
            }
            if ((p.indexOf((a[3].toLowerCase())) != -1 || p.indexOf((a[3].toUpperCase())) != -1) && p != "dica-") {
                ac++;
            }
            if (((p[3]).toLowerCase() == (a[3]).toLowerCase()) && p != "dica-") {
                pos++;
            }
            if ((p.indexOf((a[4].toLowerCase())) != -1 || p.indexOf((a[4].toUpperCase())) != -1) && p != "dica-") {
                ac++;
            }
            if (((p[4]).toLowerCase() == (a[4]).toLowerCase()) && p != "dica-") {
                pos++;
            }
            if (p == "dica-") {
                if (cdica < 2) {
                    xxx = prompt("Qual letra você quer que seja revelada?\nDigite a sua posição (1, 2, 3 ou 4).")
                    alert("A letra na " + xxx + "° posição é " + a[(xxx - 1)] + ".");
                    cdica++;
                } else {
                    alert("Você não pode mais usar dicas, pois ultrapassou o limite.");
                }
                c++;
            }
            if (p.length != 5) {
                alert("Digite uma palavra válida.");
            } else if (p != "dica-") {
                al += "\n" + p + "  " + ac + "      " + pos;
            }
            p = prompt(al + "\nVocê tem " + c + " tentativas restantes.\n-Digite outra palavra de 5 letras:");
            ac = 0, pos = 0;
        }
        if (p == "") {
            xx = prompt("Você quer continuar jogando?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        } else if (a.toLowerCase() == p.toLowerCase()) {
            xx = prompt("Parabéns! Você acertou!\nA palavra era " + a + ".\nDeseja jogar novamente?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        } else {
            xx = prompt("Você ultrapassou o limite de tentativas.\nA palavra era " + a + ".\nDeseja jogar novamente?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        }
    } else if (x == "3" || x.toLowerCase() == "Difícil".toLowerCase() || x.toLowerCase() == "dificil") {
        cdica = 0;
        var d = "morrer faltar correr sentar contar mandar orelha ouvido mérito pressa legado exímio infame êxito casual alusão gentil ficção utopia sóbrio formal idiota eficaz hábito paixão ovelha exibir ciente cômico bélica"
        do {
            var a = d.substr((Math.floor(Math.random() * 202)), 6);
        } while (a.indexOf(" ") != -1);
        var ac = 0,
            pos = 0;
        var p = prompt("Digite uma palavra de 6 letras:");
        var al = "PAL.    AC.  POS.";
        for (var c = 15; p != a && c > 0 && p != ""; c--) {
            if (p == "dica") {
                p += "--";
            }
            if ((p.indexOf((a[0].toLowerCase())) != -1 || p.indexOf((a[0].toUpperCase())) != -1) && p != "dica--") {
                ac++;
            }
            if (((p[0]).toLowerCase() == (a[0]).toLowerCase()) && p != "dica--") {
                pos++;
            }
            if ((p.indexOf((a[1].toLowerCase())) != -1 || p.indexOf((a[1].toUpperCase())) != -1) && p != "dica--") {
                ac++;
            }
            if (((p[1]).toLowerCase() == (a[1]).toLowerCase()) && p != "dica--") {
                pos++;
            }
            if ((p.indexOf((a[2].toLowerCase())) != -1 || p.indexOf((a[2].toUpperCase())) != -1) && p != "dica--") {
                ac++;
            }
            if (((p[2]).toLowerCase() == (a[2]).toLowerCase()) && p != "dica--") {
                pos++;
            }
            if ((p.indexOf((a[3].toLowerCase())) != -1 || p.indexOf((a[3].toUpperCase())) != -1) && p != "dica--") {
                ac++;
            }
            if (((p[3]).toLowerCase() == (a[3]).toLowerCase()) && p != "dica--") {
                pos++;
            }
            if ((p.indexOf((a[4].toLowerCase())) != -1 || p.indexOf((a[4].toUpperCase())) != -1) && p != "dica--") {
                ac++;
            }
            if (((p[4]).toLowerCase() == (a[4]).toLowerCase()) && p != "dica--") {
                pos++;
            }
            if ((p.indexOf((a[5].toLowerCase())) != -1 || p.indexOf((a[5].toUpperCase())) != -1) && p != "dica--") {
                ac++;
            }
            if (((p[5]).toLowerCase() == (a[5]).toLowerCase()) && p != "dica--") {
                pos++;
            }
            if (p == "dica--") {
                if (cdica < 2) {
                    xxx = prompt("Qual letra você quer que seja revelada?\nDigite a sua posição (1, 2, 3 ou 4).")
                    alert("A letra na " + xxx + "° posição é " + a[(xxx - 1)] + ".");
                    cdica++;
                } else {
                    alert("Você não pode mais usar dicas, pois ultrapassou o limite.");
                }
                c++;
            }
            if (p.length != 6) {
                alert("Digite uma palavra válida.");
            } else if (p != "dica--") {
                al += "\n" + p + "  " + ac + "      " + pos;
            }
            p = prompt(al + "\nVocê tem " + c + " tentativas restantes.\n-Digite outra palavra de 6 letras:");
            ac = 0, pos = 0;
        }
        if (p == "") {
            xx = prompt("Você quer continuar jogando?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        } else if (a.toLowerCase() == p.toLowerCase()) {
            xx = prompt("Parabéns! Você acertou!\nA palavra era " + a + ".\nDeseja jogar novamente?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        } else {
            xx = prompt("Você ultrapassou o limite de tentativas.\nA palavra era " + a + ".\nDeseja jogar novamente?");
            if (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
                x = prompt("Selecione o nível de dificuldade:\n1-Fácil\n2-Médio\n3-Difícil");
                continue;
            } else {
                break;
            }
        }
    }
}
var xxxx = prompt("Como você avaliaria meu jogo?\n0/2 - me não gostei\n1/2 - legalzin\n2/2 - mt bom gostei prbns");
if (xxxx == "2/2" || xxxx == "2") {
    alert("Que bom! Espero que tenha se divertido!\nSerase vale os 2 pontos Raquel?");
} else if (xxxx == "1/2" || xxxx == "1") {
    alert("Putz, queria que você tivesse gostado ;-;!");
} else if (xxxx == "0/2" || xxxx == "0") {
    alert("legal pena que ninguém se importa");
}
