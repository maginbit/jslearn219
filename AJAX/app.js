document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){

	/* XMLHttpRequest : No solo cargas XML, 
	tambien puede cargar archivos txt, 
	joson o des un api rest  */

	//Crear objeto xml
	const xhr = new XMLHttpRequest(); // Estado 0

	//Abrir conexion: La conexion open; cuenta con parametros y se define como una conexion asincrona
	/*Tipo de Request:
		-GET
		-POST:si envias datos a la base de datos.
		-PUT: Si se esta actualizando.
		-DELETE: para eliminar.
		*/
	xhr.open('GET','datos.txt', true); //estado 1

	//una vez que carga
	 
	 /*FORMA ANTIGUO O ANTERIOR
		// Estados ready status
			0 - No Inicilizado
			1 - Conexion Establecida
			2 - Recibido
			3 - Procesando
			4 - Respuesta lista

	 */

	 xhr.onreadystatechange = function(){

	 	     console.log(`Estado : ${this.readyState}`);
	 		if (this.readyState === 4 && this.status === 200) {

	 			//console.log(this.responseText);
	 		}
	 }


/* FORMA NUEVA
	xhr.onload = function(){

		//Estatus: Correcto 200 |  Prohibido 403 | 404 No encontrado
		// this hace referencia a la conexion XMLHttpRequest.
		if (this.status === 200) {
			//console.log(this);
				document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
		}
	}
*/
	// Enviar el request
	xhr.send();

}