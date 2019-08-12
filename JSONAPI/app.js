const cargarPost = document.querySelector('#cargar');



addEventListener();


function addEventListener(){

	cargarPost.addEventListener('click',cargarAPI);
}


function cargarAPI(){

	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

	xhr.onload = function(){
		if (this.status === 200) {

			const respuesta = JSON.parse(this.responseText);

			console.log(respuesta);
			let htmlTemplate = '<div class="row">\n\
    			<div class="col-md-1" style=""><h3><b>UId</b></h3></div>\n\
    			<div class="col-md-1" style=""><h3><b>Id</b></h3></div>\n\
    			<div class="col-md-4" style=""><h3><b>Titulo</b></h3></div>\n\
    			<div class="col-md-6" style=""><h3><b>Contenido</b></h3></div>\n\
 				</div>';

			respuesta.forEach( function(post, index) {
				
				htmlTemplate += `
				<div class="row">
				   
					<div class="col-md-1" style="">${post.userId}</div>
					<div class="col-md-1" style="">${post.id}</div>
					<div class="col-md-4" style="">${post.title}</div>
					<div class="col-md-6" style="">${post.body}</div>			
								

					
               </div>
				`;
			});

			document.getElementById('listado').innerHTML = htmlTemplate;
		}
	}
	xhr.send();
}