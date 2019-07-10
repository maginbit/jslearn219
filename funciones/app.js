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

