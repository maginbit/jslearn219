
//NOTA : localstorage solo guarda string, se pueden guardar arreglos de string con la ayuda de JSON
//Variables
document.getElementById('tweet').value = '';
const listaTweets = document.getElementById('lista-tweets');
let f = 0;

	


// Event Listeners

eventListeners();

function eventListeners(){
	

	document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    //document.querySelector('#formulario').addEventListener('submit', llenarAutomatico);

	

	//borrar tweet
	listaTweets.addEventListener('click', borrarTweet);

	// contenido cargado
	document.addEventListener('DOMContentLoaded', localStorageListo);



}

//Funciones

//añadir Tweets al formulario

function agregarTweet(e){

	e.preventDefault();

	//console.log('Formulario enviado');
	//Leer valor del textarea
	const tweet = document.getElementById('tweet').value;
	//console.log(tweet);

	//CREAR BOTON DE ELIMINAR
		const botonBorrar = document.createElement('a');
		botonBorrar.className = 'borrar-tweet';
		botonBorrar.innerText = 'x';
		botonBorrar.style.color = 'red';

		botonBorrar.id = `${f++}`;


	//crear elemento y añadirlo al contenido
		const li = document.createElement('li');
		li.innerText =tweet;
	//Añade el boton borrar al tweet
		li.appendChild(botonBorrar);
	//Añade el tweet a la lista
		listaTweets.appendChild(li);

		console.log(listaTweets.lastChild.firstChild.data);
        
			//console.log(botonBorrar.parentElement);
	//AÑADIR A LOCAL STORAGE
		agregarTweetLocalStorage(tweet);

}

function borrarTweet(e){
	e.preventDefault();
		console.log('Dentro de borrar');
	/*if (e.target.classList.contains('borrar-tweet')) {

		console.log(e.target.parentElement.remove());

	}*/
	if (e.target.className === 'borrar-tweet') {
		e.target.parentElement.remove();
		//alert('Tweet Eliminado');
		//borrar tweets del local storoge

		const elTweet = e.target.parentElement.innerText;

		//console.log(elTweet);
			borrarTweetLocalStorage(elTweet);



	}else {
		console.log('Click fuera de borrar tweet');
	}



}

//Funcion carga los datos de local Storage en la lista de tweets

    function localStorageListo(){
   			let tweets;

   			tweets = obtenerTweetsLocalStorage();

   			tweets.forEach(function(tweet){


   					//CREAR BOTON DE ELIMINAR
					const botonBorrar = document.createElement('a');
					botonBorrar.className = 'borrar-tweet';
					botonBorrar.innerText = 'x';
					botonBorrar.style.color = 'red';
					botonBorrar.id = `${f++}`;


					//crear elemento y añadirlo al contenido
						const li = document.createElement('li');
						li.innerText =tweet;
					//Añade el boton borrar al tweet
						li.appendChild(botonBorrar);
					//Añade el tweet a la lista
						listaTweets.appendChild(li);
   			});
    	
    }

//funcion agrega tweet al local storage

	function	agregarTweetLocalStorage(tweet){

		let tweets;
		tweets = obtenerTweetsLocalStorage();
		//console.log(tweets)

		//Añadir el nuevo tweet
		   tweets.push(tweet);

		//convertir de String a Arreglo para guarado en el local storage.

		   localStorage.setItem('tweets', JSON.stringify(tweets));

		//Agregar al local storage, solo agregara un tweets y el siguiente remplazara al siguiente y asi.
			//localStorage.setItem('tweets', tweet);
	}

	//FUNCION Obtener tweets de local storage


    function obtenerTweetsLocalStorage(){
    	let tweets;
    	 //Revisamos los valores de local storage para ver si existen o no

    	 if (localStorage.getItem('tweets') === null) {
    	 		tweets = [];
    	 }else {
				tweets = JSON.parse(localStorage.getItem('tweets'));    	 	
    	 }
    	 return tweets;
    }





    //Funcion borrar Tweet local storage
        
        function borrarTweetLocalStorage(tweet){

        		console.log(tweet);
        	let tweets, tweetBorrar;

        	//Elimina la 'x' del Tweet

        	tweetBorrar = tweet.substring(0, tweet.length - 1);

        	tweets = obtenerTweetsLocalStorage();

        	tweets.forEach(function(tweet, index){
        		if (tweetBorrar === tweet) {
        			tweets.splice(index, 1);
        		}
        	});

        	localStorage.setItem('tweets', JSON.stringify(tweets));


        }





        function llenarAutomatico(){
        	for (var i = 0; i < 300; i++) {
        		//Leer valor del textarea
	const tweet = 'Mi Tweet '+i;
	//console.log(tweet);

	//CREAR BOTON DE ELIMINAR
		const botonBorrar = document.createElement('a');
		botonBorrar.className = 'borrar-tweet';
		botonBorrar.innerText = 'x';
		botonBorrar.style.color = 'red';


	//crear elemento y añadirlo al contenido
		const li = document.createElement('li');
		li.innerText =tweet;
	//Añade el boton borrar al tweet
		li.appendChild(botonBorrar);
	//Añade el tweet a la lista
		listaTweets.appendChild(li);

			//console.log(botonBorrar.parentElement);
	//AÑADIR A LOCAL STORAGE
		agregarTweetLocalStorage(tweet);
        	}
        }