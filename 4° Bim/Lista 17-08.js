function v(d, t) {
	var v = d / t;
	return v;
}
var d = Number(prompt("Digite a distância em metros:"));
var t = Number(prompt("Digite o tempo em segundos:"));
alert(v(d, t).toFixed(2) + " m/s");

/* ------------------------------------------------------- */

function troco(preco, pago) {
	var r = Math.abs(preco - pago);
	return r;
}
var preco = Number(prompt("Preço do produto:")),
	pago = Number(prompt("Quantia paga:"));
if (preco > pago) {
	alert("Faltam R$ " + troco(preco, pago) + ".");
} else if (pago > preco) {
	alert("Sobraram R$ " + troco(preco, pago) + ".");
} else if (pago == preco) {
	alert("Não sobrou/faltou nada.");
}
