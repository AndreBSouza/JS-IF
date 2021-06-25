var nr = prompt("Digite um número em algarismos romanos:").trim().toUpperCase();
var ia = 0,
    q = "";
while (q == "") {
    if (nr.indexOf("IIII") == -1 && nr.indexOf("VV") == -1 && nr.indexOf("XXXX") == -1 && nr.indexOf("LL") == -1 && nr.indexOf("CCCC") == -1 && nr.indexOf("DD") == -1 && nr.indexOf("MMMM") == -1 && nr.indexOf("IIV") == -1 && nr.indexOf("IIX") == -1 && nr.indexOf("VX") == -1 && nr.indexOf("XXC") == -1 && nr.indexOf("VC") == -1 && nr.indexOf("VL") == -1 && nr.indexOf("XXL") == -1 && nr.indexOf("LC") == -1 && nr.indexOf("CCM") == -1 && nr.indexOf("XD") == -1 && nr.indexOf("LD") == -1 && nr.indexOf("CCD") == -1) {
        if (nr.indexOf("III") != -1 && (nr.indexOf("III") == nr.lastIndexOf("III"))) {
            ia += 3;
        } else if (nr.indexOf("II") != -1 && (nr.indexOf("II") == nr.lastIndexOf("II"))) {
            ia += 2;
        } else if (nr.indexOf("I") != -1 && (nr.indexOf("I") == nr.lastIndexOf("I")) && nr.indexOf("IV") == -1 && nr.indexOf("IX") == -1) {
            ia += 1;
        } else if (nr.indexOf("IV") != -1 && (nr.indexOf("IV") == nr.lastIndexOf("IV"))) {
            ia += 4;
        } else if (nr.indexOf("IX") != -1 && (nr.indexOf("IX") == nr.lastIndexOf("IX"))) {
            ia += 9;
        } else if (nr.indexOf("III") != nr.lastIndexOf("III") || nr.indexOf("II") != nr.lastIndexOf("II") || nr.indexOf("I") != nr.lastIndexOf("I") || nr.indexOf("IV") != nr.lastIndexOf("IV") || nr.indexOf("IX") != nr.lastIndexOf("IX")) {
            q = prompt("Número inválido.\nDeseja tentar novamente?\nTecle ENTER para sim e ESC para não.");
            if (q != "") {
                alert("Adeus!");
                break;
            }
        }
        if (nr.indexOf("V") != -1 && nr.indexOf("IV") == -1 && (nr.indexOf("V") == nr.lastIndexOf("V"))) {
            ia += 5;
        } else if (nr.indexOf("V") != nr.lastIndexOf("V")) {
            q = prompt("Número inválido.\nDeseja tentar novamente?\nTecle ENTER para sim e ESC para não.");
            if (q != "") {
                alert("Adeus!");
                break;
            }
        }
        if (nr.indexOf("XXX") != -1 && (nr.indexOf("XXX") == nr.lastIndexOf("XXX"))) {
            ia += 30;
        } else if (nr.indexOf("XX") != -1 && (nr.indexOf("XX") == nr.lastIndexOf("XX"))) {
            ia += 20;
        } else if (nr.indexOf("X") != -1 && nr.indexOf("XL") == -1 && nr.indexOf("XC") == -1 && (nr.indexOf("IX") == -1 || nr.indexOf("IX") > nr.indexOf("X"))) {
            ia += 10;
        } else if (nr.indexOf("XL") != -1 && (nr.indexOf("XL") == nr.lastIndexOf("XL"))) {
            ia += 40;
        } else if (nr.indexOf("XC") != -1 && (nr.indexOf("XC") == nr.lastIndexOf("XC"))) {
            ia += 90;
        } else if (nr.indexOf("XXX") != nr.lastIndexOf("XXX") || nr.indexOf("XX") != nr.lastIndexOf("XX") || nr.indexOf("X") != nr.lastIndexOf("X") || nr.indexOf("XL") != nr.lastIndexOf("XL") || nr.indexOf("XC") != nr.lastIndexOf("XC")) {
            q = prompt("Número inválido.\nDeseja tentar novamente?\nTecle ENTER para sim e ESC para não.");
            if (q != "") {
                alert("Adeus!");
                break;
            }
        }
        if (nr.indexOf("L") != -1 && nr.indexOf("XL") == -1 && (nr.indexOf("L") == nr.lastIndexOf("L"))) {
            ia += 50;
        } else if (nr.indexOf("L") != nr.lastIndexOf("L")) {
            q = prompt("Número inválido.\nDeseja tentar novamente?\nTecle ENTER para sim e ESC para não.");
            if (q != "") {
                alert("Adeus!");
                break;
            }
        }
        if (nr.indexOf("CCC") != -1 && (nr.indexOf("CCC") == nr.lastIndexOf("CCC"))) {
            ia += 300;
        } else if (nr.indexOf("CC") != -1 && (nr.indexOf("CC") == nr.lastIndexOf("CC"))) {
            ia += 200;
        } else if (nr.indexOf("C") != -1 && nr.indexOf("CM") == -1 && nr.indexOf("CD") == -1 && (nr.indexOf("XC") == -1 || nr.indexOf("XC") > nr.indexOf("C"))) {
            ia += 100;
        } else if (nr.indexOf("CD") != -1 && (nr.indexOf("CD") == nr.lastIndexOf("CD"))) {
            ia += 400;
        } else if (nr.indexOf("CM") != -1 && (nr.indexOf("CM") == nr.lastIndexOf("CM"))) {
            ia += 900;
        } else if (nr.indexOf("CCC") != nr.lastIndexOf("CCC") || nr.indexOf("CC") != nr.lastIndexOf("CC") || nr.indexOf("C") != nr.lastIndexOf("C") || nr.indexOf("CD") != nr.lastIndexOf("CD") || nr.indexOf("CM") != nr.lastIndexOf("CM")) {
            q = prompt("Número inválido.\nDeseja tentar novamente?\nTecle ENTER para sim e ESC para não.");
            if (q != "") {
                alert("Adeus!");
                break;
            }
        }
        if (nr.indexOf("D") != -1 && nr.indexOf("CD") == -1 && (nr.indexOf("D") == nr.lastIndexOf("D"))) {
            ia += 500;
        } else if (nr.indexOf("D") != nr.lastIndexOf("D")) {
            q = prompt("Número inválido.\nDeseja tentar novamente?\nTecle ENTER para sim e ESC para não.");
            if (q != "") {
                alert("Adeus!");
                break;
            }
        }
        if (nr.indexOf("MMM") != -1 && (nr.indexOf("MMM") == nr.lastIndexOf("MMM"))) {
            ia += 3000;
        } else if (nr.indexOf("MM") != -1 && (nr.indexOf("MM") == nr.lastIndexOf("MM"))) {
            ia += 2000;
        } else if (nr.indexOf("M") != -1 && (nr.indexOf("M") == nr.lastIndexOf("M"))) {
            ia += 1000;
        } else if (nr.indexOf("MMM") != nr.lastIndexOf("MMM") || nr.indexOf("MM") != nr.lastIndexOf("MM") || nr.indexOf("M") != nr.lastIndexOf("M")) {
            q = prompt("Número inválido.\nDeseja tentar novamente?\nTecle ENTER para sim e ESC para não.");
            if (q != "") {
                alert("Adeus!");
                break;
            }
        }
        alert(nr + " em algarismos indo-arábicos é " + ia);
        break;
    } else {
        q = prompt("Número inválido.\nDeseja tentar novamente?\nTecle ENTER para sim e ESC para não.");
        if (q != "") {
            alert("Adeus!");
            break;
        }
    }
}
