const carrito = document.getElementById('carrito');
const cursos = document.querySelector('#lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito =  document.querySelector('#vaciar-carrito');

cargarEventListener();

function cargarEventListener(){
	//Dispara cuando se presiona el boton agregar carrito
    cursos.addEventListener('click', comprarCurso);
	
	//Cuando se elimina el curso del carrito
	carrito.addEventListener('click', eliminarCurso);
	
	//Al vaciar el carrito
	btnVaciarCarrito.addEventListener('click', eliminarTodosCursosCarrito);	
    
    //Al cargar el documento, mostrar LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);

}


//Funciones

//Funcion que añade el curso al carrito

function comprarCurso(e){
	e.preventDefault();
		//Delagation para agregar-carrito
		
	if (e.target.classList.contains('agregar-carrito')) {
		
		const curso = e.target.parentElement.parentElement;
		//Enviamos el curso seleccionado para tomar los datos (fotos, contenido, clases etc).
		leerDatosCurso(curso);

		//console.log(curso.querySelector('a').getAttribute('data-id'));
	}
}

	//lee los datos del curso

	function leerDatosCurso(curso){

			const infoCurso ={
						imagen: curso.querySelector('img').src,
						titulo: curso.querySelector('h4').textContent,
						precio: curso.querySelector('.precio span').textContent,
						id: curso.querySelector('a').getAttribute('data-id')

			}

			insertarCarrito(infoCurso);




			
	}

	//function

	//Muestra el curso seleccionado en el carrito

	function insertarCarrito(curso){
		const row = document.createElement('tr');

			row.innerHTML = `
				<td> 
					<img src="${curso.imagen}" width=100> 
				</td>
				<td>
					${curso.titulo}
				</td>
				<td>
					${curso.precio}
				</td>
				<td>
					<a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
				</td>
			`;



			listaCursos.appendChild(row);
			guardarCursoLocalStorage(curso);

	}
//Elimina un curso de carrito de compra

function eliminarCurso(e){

		e.preventDefault();
		let curso;
		let	cursoId;

		if (e.target.classList.contains('borrar-curso')) {

			e.target.parentElement.parentElement.remove();
			curso = e.target.parentElement.parentElement;
			cursoId = curso.querySelector('a').getAttribute('data-id');
		}

			console.log(cursoId);
		//Eliminar Datos del Storage
		eliminarCursoLocalStorage(cursoId);
}

//Eliminar todos los cursos del carrito de compra

function eliminarTodosCursosCarrito(e){
		e.preventDefault();

		//forma lenta
				listaCursos.innerHTML = '';
		//forma rapida (recomendada)
		
		while (listaCursos.firstChild) {
					listaCursos.removeChild(listaCursos.firstChild);
				}		

		return false;		
}

//Almacena cursos en el local storage

	function guardarCursoLocalStorage(curso){
		let cursos;
		//toma el valor de un arreglo con datos de ls o vacio
		cursos = obtenerCursosLocalStorage();
		//el curso seleccionado se agrega el arreglo	
		cursos.push(curso);

		localStorage.setItem('cursos', JSON.stringify(cursos));

	}

	//Comprueba que haya elementos en el local storage

		function obtenerCursosLocalStorage(){

			let cursosLS;

			//comprobar si hay algo en el local storage

			if (localStorage.getItem('cursos') === null) {

				cursosLs = [];
			}else {
				cursosLs = JSON.parse(localStorage.getItem('cursos'));
			}

			return cursosLs;
		}
	//Funcion 
	//Carga los datos del local storage en el DOM
	function leerLocalStorage(){

		let cursosLS;

		cursosLs = obtenerCursosLocalStorage();

		cursosLs.forEach( function(curso) {
			//construir un template
				const row = document.createElement('tr');

			row.innerHTML = `
				<td> 
					<img src="${curso.imagen}" width=100> 
				</td>
				<td>
					${curso.titulo}
				</td>
				<td>
					${curso.precio}
				</td>
				<td>
					<a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
				</td>
			`;

			listaCursos.appendChild(row);
		});

	}	

	//Elimina el curso por el Id en local Storage

	function eliminarCursoLocalStorage(curso){

		let cursosLS;

		cursosLS = obtenerCursosLocalStorage();

		cursosLS.forEach(function(cursoLS, index){
			if (cursoLS.id === curso) {
				cursosLS.splice(index, 1);
			}
		});

		localStorage.setItem('cursos', JSON.stringify(cursosLS));


	}




















