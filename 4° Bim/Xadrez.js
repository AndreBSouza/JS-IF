/*

O PROGRAMA POSSUI ERROS E FALHAS QUE PRETENDO CONSERTAR FUTURAMENTE

*/

function reis(m) {
  for (c = 0, qr = 1; c < 8 && qr <= 2; c++) {
    if (m[c].indexOf(RB) != -1) {
      qr++;
    }
    if (m[c].indexOf(RP) != -1) {
      qr++;
    }
  }
  if (qr <= 2) {
    return false;
  } else {
    return true;
  }
}

function tabu(m) {
  var tabu = "      a      b     c      d     e      f      g      h\n8 |_" + m[0].join("_|_") + "_|\n7 |_" + m[1].join("_|_") + "_|\n6 |_" + m[2].join("_|_") + "_|\n5 |_" + m[3].join("_|_") + "_|\n4 |_" + m[4].join("_|_") + "_|\n3 |_" + m[5].join("_|_") + "_|\n2 |_" + m[6].join("_|_") + "_|\n1 |_" + m[7].join("_|_") + "_|";
  return tabu;
}

function ponto() {
  if (m[lnova][cnova] == PP) {
    pontob += 1;
  } else if (m[lnova][cnova] == CP) {
    pontob += 3;
  } else if (m[lnova][cnova] == BP) {
    pontob += 3;
  } else if (m[lnova][cnova] == TP) {
    pontob += 5;
  } else if (m[lnova][cnova] == DP) {
    pontob += 9;
  } else if (m[lnova][cnova] == PB) {
    pontop += 1;
  } else if (m[lnova][cnova] == CB) {
    pontop += 3;
  } else if (m[lnova][cnova] == BB) {
    pontop += 3;
  } else if (m[lnova][cnova] == TB) {
    pontop += 5;
  } else if (m[lnova][cnova] == DB) {
    pontop += 9;
  }
}

function valid_jog(j) {
  if (j != null && j != "") {
    peca = j[0], catual = j[1], latual = Number(j[2]), err = 0, cnova = j[4], lnova = Number(j[5]);
    if (catual == "a") {
      catual = 0;
    } else if (catual == "b") {
      catual = 1;
    } else if (catual == "c") {
      catual = 2;
    } else if (catual == "d") {
      catual = 3;
    } else if (catual == "e") {
      catual = 4;
    } else if (catual == "f") {
      catual = 5;
    } else if (catual == "g") {
      catual = 6;
    } else if (catual == "h") {
      catual = 7;
    } else {
      alert("Posição atual inválida.");
      err++;
    }
    if (latual == 1) {
      latual = 7;
    } else if (latual == 2) {
      latual = 6;
    } else if (latual == 3) {
      latual = 5;
    } else if (latual == 5) {
      latual = 3;
    } else if (latual == 6) {
      latual = 2;
    } else if (latual == 7) {
      latual = 1;
    } else if (latual == 8) {
      latual = 0;
    } else if (latual > 8 || latual < 1) {
      alert("Posição atual inválida.");
      err++;
    }
    if (cnova == "a") {
      cnova = 0;
    } else if (cnova == "b") {
      cnova = 1;
    } else if (cnova == "c") {
      cnova = 2;
    } else if (cnova == "d") {
      cnova = 3;
    } else if (cnova == "e") {
      cnova = 4;
    } else if (cnova == "f") {
      cnova = 5;
    } else if (cnova == "g") {
      cnova = 6;
    } else if (cnova == "h") {
      cnova = 7;
    } else {
      alert("Nova posição inválida.");
      err++;
    }
    if (lnova == 1) {
      lnova = 7;
    } else if (lnova == 2) {
      lnova = 6;
    } else if (lnova == 3) {
      lnova = 5;
    } else if (lnova == 5) {
      lnova = 3;
    } else if (lnova == 6) {
      lnova = 2;
    } else if (lnova == 7) {
      lnova = 1;
    } else if (lnova == 8) {
      lnova = 0;
    } else if (lnova < 1 || lnova > 8) {
      alert("Nova posição inválida.");
      err++;
    }
    if (lnova == latual && cnova == catual) {
      alert("As posições são iguais.");
      err++;
    }
    if (peca != "P" && peca != "B" && peca != "C" && peca != "T" && peca != "D" && peca != "R") {
      alert("Peça inválida.");
      err++;
    }
    if (err == 0) {
      return true;
    } else {
      return false;
    }
  }
}

function peao(m, j) {
  if (play == "B") {
    if (m[latual][catual] != PB) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (cnova == catual && m[latual - 1][catual] == "__" && m[lnova][cnova] == "__") {
      if (lnova == latual - 1) {
        m[lnova][cnova] = PB;
        m[latual][catual] = "__";
      } else if (latual == 6 && lnova == latual - 2) {
        m[lnova][cnova] = PB;
        m[latual][catual] = "__";
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (Math.abs(cnova - catual) == 1 && lnova == latual - 1 && (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP)) {
      ponto();
      m[lnova][cnova] = PB;
      m[latual][catual] = "__";
    } else {
      alert("Movimento inválido.");
      err++;
    }
    while (lnova == 0) {
      x = prompt("Deseja promover o peão para qual peça?\n\n1 - Cavalo\n2 - Bispo\n3 - Torre\n4 - Dama");
      if (x == "1" || x.toLowerCase() == "cavalo") {
        m[lnova][cnova] = CB;
        m[latual][catual] = "__";
        break;
      } else if (x == "2" || x.toLowerCase() == "bispo") {
        m[lnova][cnova] = BB;
        m[latual][catual] = "__";
        break;
      } else if (x == "3" || x.toLowerCase() == "torre") {
        m[lnova][cnova] = TB;
        m[latual][catual] = "__";
        break;
      } else if (x == "4" || x.toLowerCase() == "dama") {
        m[lnova][cnova] = DB;
        m[latual][catual] = "__";
        break;
      } else {
        alert("Digite uma peça válida.");
        err++;
        continue;
      }
    }
  } else if (play == "P") {
    if (m[latual][catual] != PP) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (cnova == catual && m[latual + 1][catual] == "__" && m[lnova][cnova] == "__") {
      if (lnova == latual + 1) {
        m[lnova][cnova] = PP;
        m[latual][catual] = "__";
      } else if (latual == 1 && lnova == latual + 2) {
        m[lnova][cnova] = PP;
        m[latual][catual] = "__";
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (Math.abs(cnova - catual) == 1 && lnova == latual + 1 && (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB)) {
      ponto();
      m[lnova][cnova] = PP;
      m[latual][catual] = "__";
    } else {
      alert("Movimento inválido.");
      err++;
    }
    while (lnova == 8) {
      x = prompt("Deseja promover o peão para qual peça?\n\n1 - Cavalo\n2 - Bispo\n3 - Torre\n4 - Dama");
      if (x == "1" || x.toLowerCase() == "cavalo") {
        m[lnova][cnova] = CP;
        m[latual][catual] = "__";
        break;
      } else if (x == "2" || x.toLowerCase() == "bispo") {
        m[lnova][cnova] = BP;
        m[latual][catual] = "__";
        break;
      } else if (x == "3" || x.toLowerCase() == "torre") {
        m[lnova][cnova] = TP;
        m[latual][catual] = "__";
        break;
      } else if (x == "4" || x.toLowerCase() == "dama") {
        m[lnova][cnova] = DP;
        m[latual][catual] = "__";
        break;
      } else {
        alert("Peça inválida.");
        err++;
        continue;
      }
    }
  }
}

function torre(m, j) {
  if (play == "B") {
    if (m[latual][catual] != TB) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (latual == lnova && catual < cnova) {
      for (i = catual + 1; i < cnova; i++) {
        if (m[latual][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual == lnova && catual > cnova) {
      for (i = catual - 1; i > cnova; i--) {
        if (m[latual][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (catual == cnova && latual < lnova) {
      for (i = latual + 1; i < lnova; i++) {
        if (m[i][catual] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (catual == cnova && latual > lnova) {
      for (i = latual - 1; i > lnova; i--) {
        if (m[i][catual] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  } else if (play == "P") {
    if (m[latual][catual] != TP) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (latual == lnova && catual < cnova) {
      for (i = catual + 1; i < cnova; i++) {
        if (m[latual][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova) {
        m[latual][catual] = "__";
        m[lnova][cnova] = TP;
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = TP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual == lnova && catual > cnova) {
      for (i = catual - 1; i > cnova; i--) {
        if (m[latual][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova) {
        m[latual][catual] = "__";
        m[lnova][cnova] = TP;
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = TP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (catual == cnova && latual < lnova) {
      for (i = latual + 1; i < lnova; i++) {
        if (m[i][catual] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == lnova) {
        m[latual][catual] = "__";
        m[lnova][cnova] = TP;
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = TP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (catual == cnova && latual > lnova) {
      for (i = latual - 1; i > lnova; i--) {
        if (m[i][catual] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == lnova) {
        m[latual][catual] = "__";
        m[lnova][cnova] = TP;
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = TP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = TB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  }
}

function rei(m, j) {
  if (play == "B") {
    if (m[latual][catual] != RB) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (Math.abs(lnova - latual) == 1 || Math.abs(catual - cnova) == 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = RB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = RB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  } else if (play == "P") {
    if (m[latual][catual] != RP) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (Math.abs(lnova - latual) == 1 || Math.abs(catual - cnova) == 1) {
      if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = RP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = RP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  }
}

function dama(m, j) {
  if (play == "B") {
    if (m[latual][catual] != DB) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (latual == lnova && catual < cnova) {
      for (i = catual + 1; i < cnova; i++) {
        if (m[latual][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == DP) {
          ponto();
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual == lnova && catual > cnova) {
      for (i = catual - 1; i > cnova; i--) {
        if (m[latual][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == DP) {
          ponto();
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (catual == cnova && latual < lnova) {
      for (i = latual + 1; i < lnova; i++) {
        if (m[i][catual] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == DP) {
          ponto();
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (catual == cnova && latual > lnova) {
      for (i = latual - 1; i > lnova; i--) {
        if (m[i][catual] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == DP) {
          ponto();
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual < lnova && catual < cnova) {
      for (i = catual + 1, c = latual + 1; i < cnova && c < lnova; i++, c++) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual > lnova && catual < cnova) {
      for (i = catual + 1, c = latual - 1; i < cnova && c > lnova; i++, c--) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual > lnova && catual > cnova) {
      for (i = catual - 1, c = latual - 1; i > cnova && c > lnova; i--, c--) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual < lnova && catual > cnova) {
      for (i = catual - 1, c = latual + 1; i > cnova && c > lnova; i--, c++) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  } else if (play == "P") {
    if (m[latual][catual] != DP) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (latual == lnova && catual < cnova) {
      for (i = catual + 1; i < cnova; i++) {
        if (m[latual][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova) {
        m[latual][catual] = "__";
        m[lnova][cnova] = DP;
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == DB) {
          ponto();
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual == lnova && catual > cnova) {
      for (i = catual - 1; i > cnova; i--) {
        if (m[latual][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova) {
        m[latual][catual] = "__";
        m[lnova][cnova] = DP;
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == DB) {
          ponto();
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (catual == cnova && latual < lnova) {
      for (i = latual + 1; i < lnova; i++) {
        if (m[i][catual] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == lnova) {
        m[latual][catual] = "__";
        m[lnova][cnova] = DP;
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == DB) {
          ponto();
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (catual == cnova && latual > lnova) {
      for (i = latual - 1; i > lnova; i--) {
        if (m[i][catual] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == lnova) {
        m[latual][catual] = "__";
        m[lnova][cnova] = DP;
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == DB) {
          ponto();
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual < lnova && catual < cnova) {
      for (i = catual + 1, c = latual + 1; i < cnova && c < lnova; i++, c++) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == PB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual > lnova && catual < cnova) {
      for (i = catual + 1, c = latual - 1; i < cnova && c > lnova; i++, c--) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == PB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual > lnova && catual > cnova) {
      for (i = catual - 1, c = latual - 1; i > cnova && c > lnova; i--, c--) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == PB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual < lnova && catual > cnova) {
      for (i = catual - 1, c = latual + 1; i > cnova && c > lnova; i--, c++) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == PB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = DP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  }
}

function cavalo(m, j) {
  if (play == "B") {
    if (m[latual][catual] != CB) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (lnova == latual + 2 && cnova == catual + 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (lnova == latual - 2 && cnova == catual + 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (lnova == latual - 2 && cnova == catual - 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (lnova == latual + 2 && cnova == catual - 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (cnova == catual + 2 && lnova == latual + 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (cnova == catual - 2 && lnova == latual + 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (cnova == catual - 2 && lnova == latual - 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (cnova == catual + 2 && lnova == latual - 1) {
      if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CB;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  } else if (play == "P") {
    if (m[latual][catual] != CP) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (lnova == latual + 2 && cnova == catual + 1) {
      if ((m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB)) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (lnova == latual - 2 && cnova == catual + 1) {
      if ((m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB)) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (lnova == latual - 2 && cnova == catual - 1) {
      if ((m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB)) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (lnova == latual + 2 && cnova == catual - 1) {
      if ((m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB)) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (cnova == catual + 2 && lnova == latual + 1) {
      if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (cnova == catual - 2 && lnova == latual + 1) {
      if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (cnova == catual - 2 && lnova == latual - 1) {
      if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else if (cnova == catual + 2 && lnova == latual - 1) {
      if ((m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB)) {
        ponto();
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else if (m[lnova][cnova] == "__") {
        m[latual][catual] = "__";
        m[lnova][cnova] = CP;
      } else {
        alert("Movimento inválido.");
        err++;
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  }
}

function bispo(m, j) {
  if (play == "B") {
    if (m[latual][catual] != BB) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (latual < lnova && catual < cnova) {
      for (i = catual + 1, c = latual + 1; i < cnova && c < lnova; i++, c++) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = BB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = BB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual > lnova && catual < cnova) {
      for (i = catual + 1, c = latual - 1; i < cnova && c > lnova; i++, c--) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = BB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = BB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual > lnova && catual > cnova) {
      for (i = catual - 1, c = latual - 1; i > cnova && c > lnova; i--, c--) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = BB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = BB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual < lnova && catual > cnova) {
      for (i = catual - 1, c = latual + 1; i > cnova && c > lnova; i--, c++) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PP || m[lnova][cnova] == RP || m[lnova][cnova] == DP || m[lnova][cnova] == BP || m[lnova][cnova] == CP || m[lnova][cnova] == TP) {
          ponto();
          m[lnova][cnova] = BB;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = BB;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  } else if (play == "P") {
    if (m[latual][catual] != BP) {
      alert("A peça não está nessa posição.");
      err++;
    } else if (latual < lnova && catual < cnova) {
      for (i = catual + 1, c = latual + 1; i < cnova && c < lnova; i++, c++) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = BP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = BP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual > lnova && catual < cnova) {
      for (i = catual + 1, c = latual - 1; i < cnova && c > lnova; i++, c--) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = BP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = BP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual > lnova && catual > cnova) {
      for (i = catual - 1, c = latual - 1; i > cnova && c > lnova; i--, c--) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = BP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = BP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else if (latual < lnova && catual > cnova) {
      for (i = catual - 1, c = latual + 1; i > cnova && c > lnova; i--, c++) {
        if (m[c][i] != "__") {
          alert("Movimento inválido.");
          err++;
          break;
        }
      }
      if (i == cnova && c == lnova) {
        if (m[lnova][cnova] == PB || m[lnova][cnova] == RB || m[lnova][cnova] == DB || m[lnova][cnova] == BB || m[lnova][cnova] == CB || m[lnova][cnova] == TB) {
          ponto();
          m[lnova][cnova] = BP;
          m[latual][catual] = "__";
        } else if (m[lnova][cnova] == "__") {
          m[lnova][cnova] = BP;
          m[latual][catual] = "__";
        } else {
          alert("Movimento inválido.");
          err++;
        }
      }
    } else {
      alert("Movimento inválido.");
      err++;
    }
  }
}
var TB = "♖",
  CB = "♘",
  BB = "♗",
  DB = "♕",
  RB = "♔",
  PB = "♙",
  TP = "♜",
  CP = "♞",
  BP = "♝",
  DP = "♛",
  RP = "♚",
  PP = "♟",
  m, peca, latual, catual, err, lnova, cnova, j = " ",
  play, pontob, pontop, jn = "s",
  x;
alert('Oi, vamos jogar xadrez? Vou vos apresentar o jogo.\n1 - O jogo é composto por um tabuleiro 8x8.\n2 - Cada jogador vai possuir 16 peças no início do jogo.\n3 - O jogador que capturar o rei adversário vence.\n4 - Existem 6 tipos diferentes de peças:\n   Rei (♔/♚; R): move-se para todas as direções mas apenas uma casa por lance.\n   Dama/Rainha (♕/♛; D; 9 pontos): pode mover-se pelas colunas, fileiras e diagonal.\n   Bispo (♗/♝; B; 3 pontos): move-se pela diagonal.\n   Cavalo (♘/♞; C; 3 pontos): movimenta-se sempre em "L", ou seja, duas casas na vertical e uma na horizontal, ou duas na horizontal e uma na vertical.\n   Torre (♖/♜; T; 5 pontos): movimenta-se em direção reta pelas colunas ou fileiras.\n   Peão (♙/♟; P; 1 ponto): movimenta-se apenas uma casa para frente e captura outras peças na primeira casa diagonal superior. No seu primeiro movimento, ele poderá mover-se uma ou  duas casas. Não pode mover-se para trás.\n5 - As jogadas serão indicadas da seguinte maneira: primeiramente escreve-se a letra que representa a peça jogada, depois a coordenada da casa em que a peça estava e a da casa na qual ela foi colocada, colunas e linhas, nesta ordem.\n6 - Bom jogo!');
while (jn.toLowerCase() == "sim" || jn.toLowerCase() == "si" || jn.toLowerCase() == "s" || jn.toLowerCase() == "ss" || jn.toLowerCase() == "yup" || jn.toLowerCase() == "yurp" || jn.toLowerCase() == "yes" || jn.toLowerCase() == "arra" || jn.toLowerCase() == "ãrrã" || jn.toLowerCase() == "arrã" || jn.toLowerCase() == "obv" || jn.toLowerCase() == "clr" || jn.toLowerCase() == "ctz") {
  m = [
    [TP, CP, BP, DP, RP, BP, CP, TP],
    [PP, PP, PP, PP, PP, PP, PP, PP],
    ["__", "__", "__", "__", "__", "__", "__", "__"],
    ["__", "__", "__", "__", "__", "__", "__", "__"],
    ["__", "__", "__", "__", "__", "__", "__", "__"],
    ["__", "__", "__", "__", "__", "__", "__", "__"],
    [PB, PB, PB, PB, PB, PB, PB, PB],
    [TB, CB, BB, DB, RB, BB, CB, TB]
  ], play = "B", pontob = 0, pontop = 0;
  while (reis(m) == true && j != null && j != "") {
    if (play == "B") {
      j = prompt(tabu(m) + "\n\nPontuação: " + pontob + "\n\nVez do branco, digite a jogada (Ex.: Pb2 b3):");
      valid_jog(j);
      if (valid_jog(j) == true) {
        if (peca == "P") {
          peao(m, j);
        } else if (peca == "T") {
          torre(m, j);
        } else if (peca == "R") {
          rei(m, j);
        } else if (peca == "D") {
          dama(m, j);
        } else if (peca == "C") {
          cavalo(m, j);
        } else if (peca == "B") {
          bispo(m, j);
        }
      }
      if (err == 0) {
        play = "P";
      }
    } else {
      j = prompt(tabu(m) + "\n\nPontuação: " + pontop + "\n\nVez do preto, digite a jogada (Ex.: Pf7 f6):");
      valid_jog(j);
      if (valid_jog(j) == true) {
        if (peca == "P") {
          peao(m, j);
        } else if (peca == "T") {
          torre(m, j);
        } else if (peca == "R") {
          rei(m, j);
        } else if (peca == "D") {
          dama(m, j);
        } else if (peca == "C") {
          cavalo(m, j);
        } else if (peca == "B") {
          bispo(m, j);
        }
      }
      if (err == 0) {
        play = "B";
      }
    }
  }
  if (reis(m) == false) {
    if (play == "B") {
      jn = prompt(tabu(m) + "\n\nPreto venceu com " + pontop + " ponto(s)!\nDesejam jogar novamente?");
    } else {
      jn = prompt(tabu(m) + "\n\nBranco venceu com " + pontob + " ponto(s)!\nDesejam jogar novamente?");
    }
  }
  if (j == null || j == "") {
    jn = prompt("Desejam jogar novamente?");
  }
}
