/*

Trabalo realizado em dupla com uma colega (citada nos comentários como "marona")

*/

alert("Olá! Seja bem-vindo(a) ao Sokoban - Halloween Version! \n Antes de tudo, aqui estão as instruções:\n1- você pode mover o Pennywise (🤡) para cima (usando W ou 8), para baixo (usando S ou 2), para a direita(usando D ou 6) e para a esquerda (usando A ou 4);\n2- O seu objetivo é empurrar todas as crianças (👦) para os balões (🎈); \n3- Você não pode mover mais de uma criança ao mesmo tempo; \n4- Você perde quando não houverem movimentos possíveis; \n5- Se você quiser reiniciar o jogo, aperte ENTER; \n6- Caso queira desistir, digite 'sair'.\n Esperamos que você goste!");
var df, jn = "s",
  x;
while (jn.toLowerCase() == "sim" || jn.toLowerCase() == "si" || jn.toLowerCase() == "s" || jn.toLowerCase() == "ss" || jn.toLowerCase() == "yup" || jn.toLowerCase() == "yes" || jn.toLowerCase() == "arra" || jn.toLowerCase() == "ãrrã" || jn.toLowerCase() == "arrã" || jn.toLowerCase() == "obv" || jn.toLowerCase() == "clr" || jn.toLowerCase() == "ctz" || jn.toLowerCase() == "selena gomez" || jn.toLowerCase() == "ptx eh o melhor grupo acapella do mundo" || jn.toLowerCase() == "gay" || jn.toLowerCase() == "mamaaaaaaaaa ooooouuuuu i doum uana dai") {
  df = prompt("Escolha a dificuldade:\n1 - Fácil (tabuleiro 5x5, robô no centro, caixas ao redor do robô)\n2 - Médio (tabuleiro 7x7, robô no centro, caixas em lugares sorteados)\n3 - Difícil (tabuleiro 10x10, robô e caixas em lugares sorteados)");

  function cavera(m) { //função que transforma crianças em caveiras quando são levadas aos balões; marona
    if (m[0][0] == "👦") {
      m[0][0] = "💀";
    }
    if (m[0][tm] == "👦") {
      m[0][tm] = "💀";
    }
    if (m[tm][0] == "👦") {
      m[tm][0] = "💀";
    }
    if (m[tm][tm] == "👦") {
      m[tm][tm] = "💀";
    }
  }

  function fill_(m) { //função que preenche a matriz; marona
    for (i = 0; i < (tm + 1); i++) {
      for (i2 = 0; i2 < (tm + 1); i2++) {
        m[i][i2] = "_";
      }
    }
    m[lR][cR] = "🤡";
    Position(m);
    caixa(m);
  }

  function caixa(m) { //função que sorteia a posição das crianças; marona
    for (d = 1; d <= 4; d++) {
      c = Math.floor(Math.random() * (tm + 1));
      l = Math.floor(Math.random() * (tm + 1));
      if (l < tm && l > 0 && c < tm && c > 0) {
        if (m[l][c] == "_" && m[(l - 1)][c] == "_" && m[(l + 1)][c] == "_" && m[l][(c - 1)] == "_" && m[l][(c + 1)] == "_") {
          m[l][c] = "👦";
        } else {
          d--;
          continue;
        }
      } else {
        d--;
        continue;
      }
    }
  }

  function move(m) { //função que lê o movimento e o executa; andre
    x = prompt(tabuleiro(m) + "\n\nEscolha um lado para movimentar o robô (usando WASD ou 8462):")
    if (x.toUpperCase() == "W" || x == "8") {
      cima(m);
    } else if (x.toUpperCase() == "S" || x == "2") {
      baixo(m);
    } else if (x.toUpperCase() == "A" || x == "4") {
      esquerda(m);
    } else if (x.toUpperCase() == "D" || x == "6") {
      direita(m);
    } else if (x != "" && x.toLowerCase() != "sair") {
      alert("Movimento inválido.");
      cm--;
    }
  }

  function baixo(m) {
    if (lR < tm) {
      if (lR < (tm - 1) && m[(lR + 1)][cR] == "👦" && m[(lR + 2)][cR] != "👦") {
        m[(lR + 2)][cR] = "👦";
        m[(lR + 1)][cR] = "🤡";
        m[lR][cR] = "_";
        lR++;
      } else if (m[(lR + 1)][cR] != "👦") {
        m[(lR + 1)][cR] = "🤡";
        m[lR][cR] = "_";
        lR++;
      } else if (lR >= (tm - 1) || m[(lR + 2)][cR] == "👦") {
        alert("Movimento inválido.");
        cm--;
      }
    } else {
      cm--;
      alert("Movimento inválido.");
    }
  }

  function cima(m) {
    if (lR > 0) {
      if (lR > 1 && m[(lR - 1)][cR] == "👦" && m[(lR - 2)][cR] != "👦") {
        m[(lR - 2)][cR] = "👦";
        m[(lR - 1)][cR] = "🤡";
        m[lR][cR] = "_";
        lR--;
      } else if (m[(lR - 1)][cR] != "👦") {
        m[(lR - 1)][cR] = "🤡";
        m[lR][cR] = "_";
        lR--;
      } else if (lR <= 1 || m[(lR - 2)][cR] == "👦") {
        alert("Movimento inválido.");
        cm--;
      }
    } else {
      alert("Movimento inválido.");
      cm--;
    }
  }

  function esquerda(m) {
    if (cR > 0) {
      if (cR > 1 && m[lR][(cR - 1)] == "👦" && m[lR][(cR - 2)] != "👦") {
        m[lR][(cR - 2)] = "👦";
        m[lR][(cR - 1)] = "🤡";
        m[lR][cR] = "_";
        cR--;
      } else if (m[lR][(cR - 1)] != "👦") {
        m[lR][(cR - 1)] = "🤡";
        m[lR][cR] = "_";
        cR--;
      } else if (cR <= 1 || m[lR][(cR - 2)] == "👦") {
        alert("Movimento inválido.");
        cm--;
      }
    } else {
      alert("Movimento inválido.");
      cm--;
    }
  }

  function direita(m) {
    if (cR < tm) {
      if (cR < (tm - 1) && m[lR][(cR + 1)] == "👦" && m[lR][(cR + 2)] != "👦") {
        m[lR][(cR + 2)] = "👦";
        m[lR][(cR + 1)] = "🤡";
        m[lR][cR] = "_";
        cR++;
      } else if (m[lR][(cR + 1)] != "👦") {
        m[lR][(cR + 1)] = "🤡";
        m[lR][cR] = "_";
        cR++;
      } else if (cR >= (tm - 1) || m[lR][(cR + 2)] == "👦") {
        alert("Movimento inválido.");
        cm--;
      }
    } else {
      alert("Movimento inválido.");
      cm--;
    }
  }

  function Position(m) { //verifica se o Pennywise ou alguma criança está no balão, caso não esteja a posição é preenchida com balão; marona
    if (m[0][0] != "🤡" && m[0][0] != "💀") {
      m[0][0] = "🎈";
    }
    if (m[0][tm] != "🤡" && m[0][tm] != "💀") {
      m[0][tm] = "🎈";
    }
    if (m[tm][0] != "🤡" && m[tm][0] != "💀") {
      m[tm][0] = "🎈";
    }
    if (m[tm][tm] != "🤡" && m[tm][tm] != "💀") {
      m[tm][tm] = "🎈";
    }
  }

  function vencer(m) { //verifica se o jogador venceu o jogo; marona
    if (m[0][0] == "💀" && m[0][tm] == "💀" && m[tm][0] == "💀" && m[tm][tm] == "💀") {
      jn = prompt("Parabéns, após ler em meu face e consultar minha cartomante posso afirmar que você venceu com " + cm + " jogadas! Quer jogar novamente?");
    }
  }

  function jogar(m) { //função central do jogo, o core; andre
    fill_(m);
    for (cm = 0; m[0][0] != "💀" || m[0][tm] != "💀" || m[tm][0] != "💀" || m[tm][tm] != "💀"; cm++) {
      move(m);
      if (x == "" || x.toLowerCase() == "sair") {
        break;
      }
      cavera(m);
      Position(m);
      if (perder(m) != 0) {
        break;
      } else {
        continue;
      }
    }

  }

  function perder(m) { //confere se é possível vencer, caso não seja, alerta a derrota; andre 
    var a = m[0].indexOf("👦"),
      a2 = m[tm].indexOf("👦"),
      tf = 0;
    for (aux = 0; aux < tm && tf == 0; aux++) {
      if ((m[aux][0] == "👦" && m[(aux + 1)][0] == "👦") || (m[aux][tm] == "👦" && m[(aux + 1)][tm] == "👦")) {
        jn = prompt("Atenção, boiola! Você perdeu pois não há mais como você vencer! Quer jogar novamente?");
        tf++;
      }
    }
    if ((m[0][(a + 1)] == "👦" || m[tm][(a2 + 1)] == "👦") && tf == 0) {
      jn = prompt("Atenção, boiola! Você perdeu pois não há mais como você vencer! Quer jogar novamente?");
      tf++;
    }
    return tf;
  }
  if (df == "1" || df.toLowerCase() == "fácil" || df.toLowerCase() == "facil") { //entra no modo fácil
    function tabuleiro(m) { //transforma a matriz em string; marona
      var s = "|_" + m[0].join("_|_") + "_|\n|_" + m[1].join("_|_") + "_|\n|_" + m[2].join("_|_") + "_|\n|_" + m[3].join("_|_") + "_|\n|_" + m[4].join("_|_") + "_|";
      return s;
    }
    var m = [
        [],
        [],
        [],
        [],
        []
      ],
      c, l, lR = 2,
      cR = 2,
      tm = 4; //determina variáveis específicas da dificuldade; andre
    jogar(m);
  }
  if (df == "2" || df.toLowerCase() == "médio" || df.toLowerCase() == "medio") {
    function tabuleiro(m) {
      var s = "|_" + m[0].join("_|_") + "_|\n|_" + m[1].join("_|_") + "_|\n|_" + m[2].join("_|_") + "_|\n|_" + m[3].join("_|_") + "_|\n|_" + m[4].join("_|_") + "_|\n|_" + m[5].join("_|_") + "_|\n|_" + m[6].join("_|_") + "_|";
      return s;
    }
    var m = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ],
      c, l, lR = 4,
      cR = 4,
      tm = 6;
    jogar(m);
  }
  if (df == "3" || df.toLowerCase() == "difícil" || df.toLowerCase() == "dificil") {
    function tabuleiro(m) {
      var s = "|_" + m[0].join("_|_") + "_|\n|_" + m[1].join("_|_") + "_|\n|_" + m[2].join("_|_") + "_|\n|_" + m[3].join("_|_") + "_|\n|_" + m[4].join("_|_") + "_|\n|_" + m[5].join("_|_") + "_|\n|_" + m[6].join("_|_") + "_|\n|_" + m[7].join("_|_") + "_|\n|_" + m[8].join("_|_") + "_|\n|_" + m[9].join("_|_") + "_|";
      return s;
    }
    var m = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ],
      c, l, lR = Math.floor(Math.random() * 10),
      cR = Math.floor(Math.random() * 10),
      tm = 9;
    jogar(m);
  }
  vencer(m);
  if (x == "") {
    jn = prompt("Deseja reiniciar o jogo?");
  } else if (x.toLowerCase() == "sair") {
    jn = prompt("Deseja continuar no jogo?");
  }
}
alert("Esperamos que tenha gostado do jogo! Obrigado por jogar e tome cuidado com bueiros!");
