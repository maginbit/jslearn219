//Nota : cualquier elemento puede tener el evento click

document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton);

function ejecutarBoton(e){
	e.preventDefault();

	let elemento;
	elemento = e;
	elemento = e.target;

	console.log(elemento);
	console.log(e.target.id);
	console.log(e.target.className);
	console.log(e.target.type);
}

console.log('--------------------------------------------');
console.log('--------------------------------------------');
console.log('-------------Otros eventos mouse------------');



const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//click

   //boton.addEventListener('click', obtenerEvento);


//DOBLE CLICK

   //boton.addEventListener('dblclick', obtenerEvento);
//MOUSE ENTER

	//boton.addEventListener('mouseenter', obtenerEvento);
//MOUSE LEAVE
	//boton.addEventListener('mouseleave', obtenerEvento);
//MOUSE OVER
		//boton.addEventListener('mouseover', obtenerEvento);

//MOUSE OUT
		//boton.addEventListener('mouseout', obtenerEvento);
//MOUSE DOWN
		//boton.addEventListener('mousedown', obtenerEvento);
//MOUSE UP
		//boton.addEventListener('mousedown.addEventListener('mouseup', obtenerEvento);
//MOUSE MOVE
		boton.addEventListener('mousemove', obtenerEvento);



function obtenerEvento(e){

	console.log('EVENTO: '+e.type);
}

