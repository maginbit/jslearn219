//Generadores : es una funcion que va retornar un , usa el simbolo * como comodin
console.log('Generadores');

function *crearGenerador(){
    //yield
    yield 1;
    yield 'Nombre';
    yield  50+4;
    yield  true;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

console.log('---- ejemplo ----');

function *nuevoGenerador(carrito){

  for(let i = 0; i < carrito.length; i++){
     
       yield carrito[i];
  }

}

//carrito

 const carrito = ['Producto1','Producto2', 'Producto3','Producto4'];

 //recorrer el iterador

 let iterador2 = nuevoGenerador(carrito);

 console.log(iterador2.next().value);
 console.log(iterador2.next().value);
 console.log(iterador2.next().value);
 console.log(iterador2.next().value);
 console.log(iterador2.next().value);