document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);


listaPaises();
//llenarOptions();

function cargarNombres(e){

	e.preventDefault();

	//Leer variables
	
	const origen = document.getElementById('origen');
	const origenSeleccionado = origen.options[origen.selectedIndex].value;

	const genero = document.getElementById('genero');
	const generoSeleccionado = genero.options[genero.selectedIndex].value;

	const numero = document.getElementById('numero').value;

	
	let url='';

	url +='http://uinames.com/api/?';

	//si hay un origen agregarlo a la url
	if (origenSeleccionado !== '') {
		url += `region=${origenSeleccionado}&`;
	}

	//si hay un origen agregarlo a la url
	if (generoSeleccionado !== '') {
		url += `gender=${generoSeleccionado}&`;
	}

	//si hay un origen agregarlo a la url
	if (numero !== '') {
		url += `amount=${numero}&`;
	}

	console.log(url);
	llenarDivNombres(url);
}

function llenarDivNombres(url){

	const xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);

   let html = '<div class="col-md-12"><h1>NOMBRES</h1></div>';
	xhr.onload = function(){

		if (this.status === 200) {

			//console.log(this.responseText);
			const nombre = JSON.parse(this.responseText);
            nombre.forEach( function(element, index) {
            	console.log(element.name);
            	html += `<div class="row">
						
						<div class="col-md-12 lista">${element.name}</div>
					 </div>`;
            });
			document.getElementById('resultado').innerHTML = html;
		}
	}
	xhr.send();
	
}

function listaPaises(){
	console.log('Dentro de listaPaises');
	const arrayPaises = [];
    
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'js/nombres.json', true);

  
	xhr.onload = function(){

		if (this.status === 200) {
			
           const nombresJson = JSON.parse(this.responseText);
           //console.log(nombresJson);
           const paisesID = document.getElementById('origen');
           nombresJson.forEach( function(element, index) {
                  var region = String(`${element.region}`);
                  //console.log(typeof region);
                  arrayPaises.push(region);

                  let option = document.createElement('option');
   						option.value = region;
   						option.innerHTML = region;
   						paisesID.appendChild(option);
           });
           
         			
		}


			
	}

	

	xhr.send();

   





}

