//traversing permite ir del padre al hijo y vice versa en la parte de selectores

//nota : los nodos son el html del documentos
/* tipos de NODOS

	1 = Elementos Html
	2 = atributos
	3 = Text Node
    4 = Comentarios
    5 = documentos
    6 = doctype
*/

const navegacion = document.querySelector('#principal');

console.log(navegacion.childNodes);
console.log(navegacion.children);
console.log(navegacion.children[0]);
console.log(navegacion.children[0].textContent = 'New Link');
console.log(navegacion.children[0].nodeName);
console.log(navegacion.nodeName);
console.log(navegacion.nodeType);

console.log('-----------------------------------');

const barra = document.querySelector('.barra');
console.log(barra.children);
console.log(barra.children[0].children[0].children);

console.log('-----------------------------------');
console.log('-----------------------------------');

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].lastElementChild);
console.log(cursos[0].childElementCount);


console.log('-----------------------------------');
console.log('-----de hijo a padre----------');



const enlace = document.querySelectorAll('.enlace');

console.log(enlace[0].parentNode);
console.log(enlace[0].parentElement);
console.log(enlace[0].parentElement.parentElement);

console.log('-----------------------------------');
console.log('-----------------------------------');

const cursos01 = document.querySelectorAll('.card');

console.log(cursos01[0].parentElement.parentElement.parentElement);
console.log(cursos01[0].parentElement.parentElement);
console.log(cursos01[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola JavaScripts');
console.log('-----------------------------------');
console.log('--------sibling primos---------');
//busca elementos cercanos

const enlaces02 = document.querySelectorAll('.enlace');
console.log(enlaces02[4].previousElementSibling.previousElementSibling);
console.log(enlaces02[0].nextElementSibling);
console.log(enlaces02[0].nextElementSibling.nextElementSibling);
console.log(enlaces02[0].nextElementSibling.nextElementSibling.parentElement.children[4]);










