/* FETCH API : permite trabajar con archivos como json, txt etc y url
				utiliza los metodos then, catch
*/

document.getElementById('txtBtn').addEventListener('click', cargarTxt);
document.getElementById('jsonBtn').addEventListener('click', cargarJson);
document.getElementById('apiBTN').addEventListener('click', cargarRest);



function cargarTxt(){

	fetch('./datos.txt')
		  .then(function(respuesta){
		  		//Aqui se define como se va obtener la informacion txt json entre otros.
		  		console.log(respuesta);
		  		console.log(respuesta.status);
		  		//nota : despues de el return el codigo no se ejecuta.
		  		return respuesta.text();

		  }).then(function(data){
		  	//Aqui como se va trabajar con la respuesta
		  	console.log(data);
		  	document.getElementById('resultado').innerHTML = data;
		  }).catch(function(error){
		  	//Aqui capturamos cualquier error de respuesta.
		  	console.log(error);
		  	document.getElementById('resultado').innerHTML = error;
		  });
}

function cargarJson(){

	fetch('./empleados.json')
		  .then(function(respuesta){
		  		//Aqui se define como se va obtener la informacion txt json entre otros.
		  		console.log(respuesta);
		  		console.log(respuesta.status);
		  		//nota : despues de el return el codigo no se ejecuta.
		  		return respuesta.json();

		  }).then(function(data){
		  	//Aqui como se va trabajar con la respuesta
		  	console.log(data);
		  	let html = '';
		  	data.forEach( function(j, index) {
		  		// statements
		  			html += `<li>${j.nombre} ${j.puesto}</li>`; 
		  		
		  	});
		  	document.getElementById('resultado').innerHTML = html;
		  }).catch(function(error){
		  	//Aqui capturamos cualquier error de respuesta.
		  	console.log(error);
		  	document.getElementById('resultado').innerHTML = error;
		  });
}

function cargarRest(){

	fetch('https://picsum.photos/list').then(function(respuesta){
		return respuesta.json();	
	}).then(function(data){
		let html = '';

		data.forEach( function(dato, index) {
				//html += `<li>${dato.author}</li>`;
				html += `<li><a href="${dato.post_url}">${dato.post_url}</a></li>`;
		});
		document.getElementById('resultado').innerHTML = html;
	}).catch(function(error){
		console.log(error);
	});
}