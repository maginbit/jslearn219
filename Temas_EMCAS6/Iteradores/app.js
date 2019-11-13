function crearIterador(carrito){
    //inicializacion el indice
    let i = 0;

    return{
        siguiente: () =>{ //arrow function
             let fin  = (i >= carrito.length);
             
             let valor = !fin ? carrito[i++] : undefined;

             return {
                    fin: fin,
                    valor: valor
             }
        }
    }
}

const carrito = ['Producto1','Producto2','Producto3',
'Producto4','Producto5'];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());