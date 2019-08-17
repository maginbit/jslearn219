console.log('-----arrow function----');
console.log('-----------------------');

let aprender;

//funcion simple de asignacion.
aprende = function(){

  console.log('Learn JavaScripts');
}

// arrow function
aprender = () => {
  console.log('Learn JavaScripts');
}

//arrow function en una sola linea
aprender = () => console.log('Aprendiendo JavaScripts');

//retorna valor
aprender = () => 'Learn JavaScripts';

//Retorna objeto
aprender = () => ({titulo :'JavaScripts', anio : 2019});
//Pasar parametros
aprender = (info1, info2) => console.log(`${info1} : ${info2}`);

aprender('nissan','v16');

//Arreglo

const productos = ['Aceite','Azucar','Pan','Leche'];
let letrasxProducto;
//map function simple con callback
letrasxProducto = productos.map(function(producto){

    return producto.length;
});
//con arrow function
letrasxProducto = productos.map((producto) => {

    return producto.length;
});
//1 parametro arrow function 
letrasxProducto = productos.map(producto =>{
    return producto.length;
});
//1 parametro 1 linea
letrasxProducto = productos.map(producto => producto.length);

//forEach simple
productos.forEach( function(element, index) {
     console.log(element);
});

//forEach arrowFunction
productos.forEach(producto => {
    console.log(producto);
});

// en 1 linea
productos.forEach(producto => console.log(producto));

console.log(letrasxProducto);
























