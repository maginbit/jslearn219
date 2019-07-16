
//DELEGATION : Permite acceder a elemtos sin necesitar de utilizar addEventListener

document.body.addEventListener('click', eliminarElemento);


function eliminarElemento(e){

	e.preventDefault();
	//console.log('Click');

	if (e.target.classList.contains('borrar-curso')) {

		console.log(e.target.parentElement.parentElement.remove());

	}
	if (e.target.classList.contains('agregar-carrito')) {

			console.log('Curso agregado');
	}
}