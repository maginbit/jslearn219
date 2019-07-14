// Eliminar de Local Storage
//localStorage.clear();



let elemento;


elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[0];

elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].getAttribute('src');

//Scripts

elemento = document.scripts;
elemento = document.images;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);
//console.log(elemento);
//console.log(imagenesArr);

imagenesArr.forEach(function(imagen) {
	//console.log(imagen);
});
//console.log(imagenesArr);

console.log('...........................................');
console.log('.................style ..................');


let encabezado;

encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

//Cambiar el texto 

encabezado.innerText = 'Aprender JavaScript';

//console.log(encabezado.innerText);

console.log('...........................................');
console.log('......getElementbyclassName................');


let enlaces = document.getElementsByClassName('enlace');//retorna una collecion de elementos

enlaces =  enlaces[0];//se puede seleccionar un elemento de la coleccion
enlaces.style.color = 'red';
enlaces.textContent = 'Nuevo Enlace';

//console.log(enlaces);

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

//console.log(listaEnlaces);

console.log('...........................................');
console.log('......getElementbyclassName................');

const links = document.getElementsByTagName('a');
//links[18].style.color = 'green';
//links[18].textContent = 'Nuevo enlace';

//convertir a arreglo
let enlaceslink = Array.from(links);

enlaceslink.forEach(function(enlace){
		//console.log(enlace);
});
//console.log(enlaceslink);

console.log('...........................................');
console.log('......queryselectorall...............');
//regrasara una lista de lo que encuentre

const enlaces01 = document.querySelectorAll('#principal .enlace');//se puede seleccionar etiquetas (a - img - h1 - etc...)


//console.log(enlaces01);

const enlaces02 = document.querySelectorAll('#principal a:nth-child(odd)');
				 enlaces02.forEach(function(impares){
				 	impares.style.backgroundColor = 'red';
				 	impares.style.backgroundColor = 'black';
				 });
console.log(enlaces02);				 