const primerLi = document.querySelector('.enlace');

let elemento;

//obtener una clase de CSS

elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

//leer atributos

elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://google.cl');
primerLi.setAttribute('data-id',20);
elemento =  primerLi.hasAttribute('data-id');
primerLi.removeAttribute('data-id');

elemento = primerLi;

console.log(elemento);