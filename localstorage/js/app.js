/*LOCAL STORAGE: Permite agregar,añadir cierta informacion en el navegador de los visitantes,
la ventaja de localstorage es que no importa si se cierra el navegador la informacion se conserva
a diferencia del sessionstorage que si se cierra el navegador se pierde la informacion, para eliminar 
completamente la informacion hay que borrar el historial
*/


//Agregar local storage

localStorage.setItem('nombre', 'Jose');

// Enviar a consola

	const nombre = localStorage.getItem('nombre');
		console.log(nombre);

//Eliminar de local Storage

	//localstorage.setItem('nombre', 'Juan');
	//localstorage.removeItem('nombre');

// Limpiar todo local Storage
	localStorage.clear();
//Session Storage

	//sessionStorage.setItem('nombre', 'Anna');