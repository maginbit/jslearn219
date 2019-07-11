function saludar(){
	console.log('Hola desde javaScript');
}

function sumar(x,y){
       return x + y;

}

function bienvenido(nombre){
	if (typeof nombre === 'undefined') {

		nombre = 'Jon Doe';
	}
	return `hola ${nombre} Bienvenido como estas`;
}
function welcome(name = 'Edagar Doe'){

   return `Welcome ${name} nice to see you again`;
}


saludar();
console.log(sumar(40,32));

suma = sumar(36,24)+10;

console.log(suma);
console.log(bienvenido('Jose Cammin'));
console.log(bienvenido());
console.log(welcome());
console.log(welcome('tomas loretti'));

console.log('......................');

const sumas = function(a = 0, b=0){
	return a + b;
}

console.log(sumas(21,342));

console.log('--------------------------------------');

const mensaje = function(name = 'Visitante', age = 20, profession = 'Periodista' ){

	return `Dear ${name} nice to know about you again your are ${age} ride, and you work like a ${profession}`;

}

console.log(mensaje('Jose Rhott',54,'Mecanico'));

console.log('----------------------------')
console.log('-------------IIFE-----------');

//la funciones iife se ejecutan de manera imnediata si necesidad de llamarla

(function(x,y){
	let sum;
	sum = x+y
	console.log(`La suma es : ${x}+${y} = ${sum}`);

})(20,30);//recibe las variables por parametro

console.log('----------------------------')
console.log('----metodos de propiedad-----------');


//metodos que se enecunetran dentro de un objeto

const player = {
		reproducir: function(id){
				console.log(`Reproduciendo el tema ${id}`);
		},
		pausar: function(id){
				console.log(`Tema en pausa ${id}`);

		},
		detener: function(id){
				console.log(`Temea Detenido ${id}`);

		}
};

//los metodos pueden crearse y guardarse fuera del objetos

player.borrar =  function(id){
				console.log(`Tema eliminado ${id}`);

}

player.reproducir('nobody korn');
player.pausar('Korn');
player.borrar(324);

//NOTA: la fuciones no importa donde se llamen antes o despues de crearlas

//NOTA: si una funcion tiene un error, las demas funcion
//que se que vienen no se ejecutaran, para eso un trycatch ayuda a solucinar este problema