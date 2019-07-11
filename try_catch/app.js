//TRYCATCH

try {
	funcionNoExiste();
} catch(e) {
	// statements
	console.log(e);
}/*finally(){ Se ejecutara de todos formas este buena o mala la condicion
	console.log('Se ejecutara de todas formas');
}*/

function getClient(){
	console.log('Descargando Lista Cliente...');

	 setTimeout(function(){
	 	console.log('Descarga Completa');
	 },3000);
}

getClient();