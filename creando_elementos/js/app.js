
const enlace = document.createElement('a');

enlace.className = 'enlace';
enlace.id = 'nuevo_id';
enlace.setAttribute('href','#');
//enlace.appendChild(document.createTextNode('New Enlace'));
enlace.textContent = 'New Enlace';
enlace.style.color = 'orange';


document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);