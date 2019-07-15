const nuevoEncabezado = document.createElement('h2');

// agregar un id

nuevoEncabezado.id = 'encabezado';

//agregar nuevo texto

nuevoEncabezado.appendChild(document.createTextNode('Los mejores Cursos'));

//Elemento anterior (sera remplazado)

const anterior = document.querySelector('#encabezado');

//Elemento padre

const elPadre = document.querySelector('#lista-cursos');

//Remplazar

elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(anterior.parentElement);