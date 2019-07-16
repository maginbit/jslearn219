//	EVENT BUBBLING

/* es cuando se define una accion se le define a un elemento (boton), 
pero esta accion afecta a mas elemento, como una propagacion, para
evitarlo se utiliza la funcion stopPropagation(); */

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');


card.addEventListener('click', function(e){
	
	console.log('Click en Card');
	e.stopPropagation();
});
infoCurso.addEventListener('click', function(e){
	
	console.log('Click en info Curso');
	e.stopPropagation();
});
agregarCarrito.addEventListener('click', function(e){
	
	console.log('Click en Agregar Carrito');
	e.stopPropagation();
});