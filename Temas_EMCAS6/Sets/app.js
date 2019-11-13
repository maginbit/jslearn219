//Sets
/*Sets :  Permite crear una lista de valores, 
parececidos a una arreglo, sets no acepta elementos 
duplicados.
Los Set no tienes llave(key), su llave es el mismo valor*/

let carrito = new Set();
//agregar elementos
carrito.add('Camisa');
carrito.add('Pantalon');
carrito.add('Billetera');
carrito.add('Polera');
carrito.add('Perfume');
carrito.add('Billetera');

console.log(carrito);
console.log(carrito.size);
console.log(typeof carrito);

//comprobar si valor existe
console.log(carrito.has('Perfume'));
//elimiar un elemento, retorna true si elimino
console.log(carrito.delete('Billetera'));
//Limpiar por completo los elementos del Set
//console.log(carrito.clear());

carrito.forEach((producto, index) => {
    console.log(`${index} : ${producto}`);
});

console.log('--Incializar un Sets--');

 let receta = new Set([1,3,4,2,3,4,3,2,1]);

 console.log(receta);

 console.log('----- convertir Set a Arreglo');

 const arregloReceta = [...receta];
 console.log(arregloReceta);