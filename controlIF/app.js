const edad = 15;

if (edad > 18) {

	console.log('Mayor edad ');
}else {
	console.log('Menor de edad');
}

console.log('------------------------');

let puntaje;

if (typeof puntaje != 'undefined') {

	console.log('El puntaje fue de '+puntaje);
}else {
	console.log('no hay puntaje');
}

console.log('------------------------');

let efectivo = 500.000;

let totalCompra = 430.000;

if (efectivo > totalCompra) {

	console.log('Pago Aprabado');
}else {
	console.log('Saldo Insuficiente');
}
console.log('------------------------');


let hora = 19;

if (hora > 0 && hora <= 12) {
	console.log('Buenos dias');
}else if (hora > 10 && hora <= 18) {
	console.log('Buenas Tardes');
}else if (hora > 18 && hora <= 24) {
	console.log('Buenas Noches');
}
else {
	console.log('Hora no valida');
}



























