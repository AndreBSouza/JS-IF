//PvP

var xx = "ss";
while (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
    var N, v = [],
        p1 = 0,
        p2 = 0,
        nj1 = prompt("Qual o nome do 1° jogador?"),
        nj2 = prompt("Qual o nome do 2° jogador?"),
        al = "",
        ij1 = nj1[0] + nj1[1],
        ij2 = nj2[0] + nj2[1],
        j1, j2, aux;
    do {
        N = Number(prompt("Digite o número de elementos do jogo: (precisa ser par e não pode ser zero)"));
        if (N == 0 || N % 2 != 0) {
            alert("Digite um número válido.");
        }
    } while (N == 0 || N % 2 != 0)
    for (c = 0; c < N; c++) {
        v[c] = Math.floor(Math.random() * 100);
    }
    aux = v.join(", ");
    al += aux + "\n" + ij1 + "    " + ij2 + "\n  " + p1 + "    " + p2;
    for (i = 0; v.length > 0; i++) {
        j1 = prompt(al + "\n" + nj1 + ", sua vez de jogar. Você quer o primeiro (1) ou o último número (2)?");
        if (j1 == "1" || j1.toLowerCase() == "primeiro") {
            p1 += v.shift();
        } else if (j1 == "2" || j1.toLowerCase() == "ultimo" || j1.toLowerCase() == "último") {
            p1 += v.pop();
        }
        al += "\n  " + p1 + "    " + p2;
        al = al.replace(aux, v.join(", "));
        aux = v.join(", ");
        j2 = prompt(al + "\n" + nj2 + ", sua vez de jogar. Você quer o primeiro (1) ou o último número (2)?");
        if (j2 == "1" || j2.toLowerCase() == "primeiro") {
            p2 += v.shift();
        } else if (j2 == "2" || j2.toLowerCase() == "ultimo" || j2.toLowerCase() == "último") {
            p2 += v.pop();
        }
        al += "\n  " + p1 + "    " + p2;
        al = al.replace(aux, v.join(", "));
        aux = v.join(", ");
    }
    if (p1 > p2) {
        alert("Parabéns, " + nj1 + ", você ganhou com " + Math.max(p1, p2) + ". " + nj2 + " fez " + Math.min(p1, p2) + ".");
    } else if (p1 < p2) {
        alert("Parabéns, " + nj2 + ", você ganhou com " + Math.max(p1, p2) + ". " + nj1 + " fez " + Math.min(p1, p2) + ".");
    } else if (p1 == p2) {
        alert(nj1 + " e " + nj2 + ", vocês empataram com " + p1 + " pontos.");
    }
    xx = prompt("Desejam jogar novamente?");
}

//PvCPU

var xx = "ss";
while (xx.toLowerCase() == "sim" || xx.toLowerCase() == "s" || xx.toLowerCase() == "ss" || xx.toLowerCase() == "yup" || xx.toLowerCase() == "yes" || xx.toLowerCase() == "arra" || xx.toLowerCase() == "ãrrã" || xx.toLowerCase() == "arrã" || xx.toLowerCase() == "obv" || xx.toLowerCase() == "clr" || xx.toLowerCase() == "ctz" || xx.toLowerCase() == "selena gomez") {
    var N = 0,
        v = [],
        p1 = 0,
        p2 = 0,
        nj1 = prompt("Qual é o seu nome?"),
        al = "",
        ij1 = nj1[0] + nj1[1],
        ij2 = "pc",
        j1, j2, aux;
    do {
        N = Number(prompt("Digite o número de elementos do jogo:(precisa ser par e não pode ser zero)"));
        if (N == 0 || N % 2 != 0) {
            alert("Digite um número válido.");
        }
    } while (N == 0 || N % 2 != 0)
    for (c = 0; c < N; c++) {
        v[c] = Math.floor(Math.random() * 100);
    }
    aux = v.join(", ");
    al += aux + "\n" + ij1 + "    " + ij2 + "\n  " + p1 + "    " + p2;
    for (i = 0; v.length > 0; i++) {
        j1 = prompt(al + "\n" + nj1 + ", sua vez de jogar. Você quer o primeiro (0) ou o último número (1)?");
        if (j1 == "0" || j1.toLowerCase() == "primeiro") {
            p1 += v.shift();
        } else if (j1 == "1" || j1.toLowerCase() == "ultimo" || j1.toLowerCase() == "último") {
            p1 += v.pop();
        }
        j2 = Math.floor(Math.random() * 2)
        if (j2 == "0") {
            p2 += v.shift();
        } else if (j2 == "1") {
            p2 += v.pop();
        }
        al += "\n  " + p1 + "    " + p2;
        al = al.replace(aux, v.join(", "));
        aux = v.join(", ");
    }
    if (p1 > p2) {
        alert("Parabéns, " + nj1 + ", você ganhou com " + Math.max(p1, p2) + "pontos. O programa fez " + Math.min(p1, p2) + "pontos.");
    } else if (p1 < p2) {
        alert(nj1 + ", você perdeu para o programa, ele fez " + Math.max(p1, p2) + "pontos. Você fez " + Math.min(p1, p2) + "pontos.");
    } else if (p1 == p2) {
        alert(nj1 + ", você fez " + p1 + " pontos e empatou com o programa.");
    }
    xx = prompt("Deseja jogar novamente?");
}
