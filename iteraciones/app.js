//for simple
for (var i = 0; i < 10;i++) {
	if (i == 5) {
		console.log('voy en el 5');
		continue;
	}
	console.log(`${i}`);
}
console.log('----------------------------------------');

for (var i = 0; i < 10 ; i++) {
 if (i % 2 == 0) {
 		console.log(`El numero ${i} es Par`);
 }else{
 	console.log(`El numero ${i} es Impar`);
 }
}

console.log('----------------------------------------');

const arregloProductos = ['Camisa','Boleto','Guitarra','Disco'];

for (var i = 0; i < arregloProductos.length; i++) {
	console.log(`Tu Producto ${arregloProductos[i]} fue agregado`);
}

console.log('-----------While do while-------------');

let  r = 0;

while (r < 10) {

	if (r === 5) {
		console.log('Cinco');
		r++;
		continue;
	}


	console.log(`Numero ${r}`);
	r++;
}

console.log('------------------------------------');

const music = ['Rap','Soul','Regaei','Opera','Classic','Jass'];
let k = 0;
while (k < music.length) {
	
	console.log(`Categorias de música ${music[k]}`);
	k++;
}

console.log('------------------------------------');

let n = 0;

do{
	console.log(`Numero: ${n}`);
	n++;
}while (n < 20);

























