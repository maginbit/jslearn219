//EL corchete en javascript es indicativo de que es un arreglo
const boton1 = document.getElementById('boton1');


boton1.addEventListener('click', function(){

	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'empleado.json', true);

	xhr.onload = function(){

		if (this.status === 200) {
			console.log(JSON.parse(this.responseText));
           const empleadoJson = JSON.parse(this.responseText);
           //console.log(empleadoJson.empresa);
           const html = `<table>
           				<tr>
						<td>Id</td>
						<td>${empleadoJson.id}</td>
					    </tr>
					    <tr>
						<td>Empresa</td>
						<td>${empleadoJson.empresa}</td>
					    </tr>
					    <tr>
						<td>Nombre</td>
						<td>${empleadoJson.nombre}</td>
					    </tr>
					    <tr>
						<td>Trabajo</td>
						<td>${empleadoJson.trabajo}</td>
					    </tr>					
           				</table>`;
           document.getElementById('empleado').innerHTML = html;				
		}


			
	}

	xhr.send();
});

//Cargar empleados 
const boton2 = document.getElementById('boton2');

boton2.addEventListener('click', function(){

	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'empleados.json', true);//simpre se debe abrir una conexion cuando se realiza un consulta nueva

	xhr.onload = function(){

		if (this.status === 200) {
			
			//console.log(JSON.parse(this.responseText));

           const empleadosJson = JSON.parse(this.responseText);

           console.log(typeof empleadosJson);

          let htmlTemplate = '';

          empleadosJson.forEach( function(persona, index) {
          	// statements
          	console.log(index);

             

          	 htmlTemplate += `<table>
           				<tr>
						<td>Id</td>
						<td>${persona.id}</td>
					    </tr>
					    <tr>
						<td>Empresa</td>
						<td>${persona.empresa}</td>
					    </tr>
					    <tr>
						<td>Nombre</td>
						<td>${persona.nombre}</td>
					    </tr>
					    <tr>
						<td>Trabajo</td>
						<td>${persona.trabajo}</td>
					    </tr>					
           				</table>`;
       });

         
          	

      document.getElementById('empleados').innerHTML = htmlTemplate;				
		}


			
	}

	xhr.send();
});


