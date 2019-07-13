console.log('------------FOR-EACH--------------');


const tareas = ['Reunion','Proyecto','Reparar','Aprender' ];

tareas.forEach(function(tareas,index){
	console.log(`${index} : ${tareas}`);
});


console.log('------------MAP--------------');



const carrito = [
				{id:1,producto:'Pantalon'},
				{id:2,producto:'Camisa'},
				{id:3,producto:'Zapatos'},
				{id:4,producto:'Cinturon'},
				{id:5,producto:'chaqueta'},
					
				]

const nameProduct = carrito.map(function(carrito){

	return carrito.producto;

});



console.log(nameProduct);

console.log('------------FOR LET--------------');

const auto = {
	marca:'Chevrolet',
	modelo:'Camaro',
	motor:5.0,
	anio:1977,
	color:'red',
	conbustible:'Disel'
}
for(let a in auto){
  console.log(`${a} : ${auto[a]}`);
}





console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');


for (var i = 0; i < 5; i++) {
	//console.log(i);
	setTimeout(function(){

		//console.log(i);
	},i * 1000);
}

console.log('------------------------------------------');
console.log('-----Iteradores ya incluidos -------------');
console.log('------------------------------------------');


const ciudades = ['Londres','New York','Madrir','Paris'];
const ordenes = new Set([10,20,30,40,50]);
const datos = new Map();
datos.set('nombre','jose');
datos.set('profesion','Panadero');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

console.log('-----iterador entries() -------------');


for(let entrada of ciudades.entries()){
	console.log(entrada);
}

for(let entrada of ordenes.entries()){
		console.log(entrada);
}

for(let entrada of datos.entries()){
	console.log(entrada);
}


console.log('-----iterador values() -------------');


for(let entrada of ciudades.values()){//values() es el iterador por defecto
	console.log(entrada);
}

for(let entrada of ordenes.values()){

		console.log(entrada);
}

for(let entrada of datos.values()){
	console.log(entrada);
}

console.log('-----iterador keys() -------------');


for(let entrada of ciudades.keys()){
	console.log(entrada);
}

for(let entrada of ordenes.keys()){
	
		console.log(entrada);
}

for(let entrada of datos.keys()){
	console.log(entrada);
}

console.log('---------array en string-------------');


const mensaje = 'Aprendiendo Javascript';

for (var i = 0; i < mensaje.length; i++) {
	console.log(mensaje[i]);
}


