document.getElementById('txtBtn').addEventListener('click', cargarTxt);
document.getElementById('jsonBtn').addEventListener('click', cargarJson);
document.getElementById('apiBTN').addEventListener('click', cargarRest);



function cargarTxt(){

	fetch('./datos.txt')
		  .then(respuesta => respuesta.text())
		  .then(data => document.getElementById('resultado').innerHTML = data)
		  .catch(error => console.log(error));
}

function cargarJson(){

	fetch('./empleados.json')
		  .then(respuesta => respuesta.json())
		  .then(data => {
		  	let html = '';
		  	data.forEach( function(j, index) {
		  		html += `<li>${j.nombre} ${j.puesto}</li>`
		  	});
		  	document.getElementById('resultado').innerHTML = html;
		    }).catch(error => console.log(error));
}

function cargarRest(){

	fetch('https://picsum.photos/list')
	.then(respuesta => respuesta.json())
	.then(data => {
		let html = '';
           data.forEach( dato =>  {
				
				html += `<li><a href="${dato.post_url}">${dato.post_url}</a></li>`;
		});
		document.getElementById('resultado').innerHTML = html;
	}).catch(error => console.log(error));
}