const pedidos = [
    {id: "1" , nombre: 'cazuela', precio: 5800},
    {id: "2" , nombre: 'porotos', precio: 4500},
    {id: "3" , nombre: 'humitas', precio: 3000},
    {id: "4" , nombre: 'chuletas', precio: 4500},
    {id: "5" , nombre: 'papas-fritas', precio: 2000},
    {id: "6" , nombre: 'humitas', precio: 6000},
    {id: "7" , nombre: 'empanadas', precio: 800},
    {id: "8" , nombre: 'porotos', precio: 2500},
    {id: "9" , nombre: 'pastel choclo', precio: 10500},
];

const precioTotal = pedidos.reduce((acc, el)=> {
    console.log('orden', acc, el);
    return  acc + el.precio;
},0);

console.log('Precio total : ',precioTotal);

console.log('---------------------------------------------------->')

const precios = pedidos.reduce((acc, val) =>{
return [...acc,val.precio];
},[]);

console.log(precios);

console.log('--------------------------------------------------------->');
console.log('DICCIONARIO');
// crea un diccionario ( index ), un objeto que tendra indices del id del pedido
const diccionario = pedidos.reduce((acc, pedido)=>{

    return {...acc, [pedido.id]: pedido}

},{});

console.log(diccionario);
console.log(diccionario[4]);
console.log('--------------------------------------------------------->');
// precio maximo
console.log('PRECIO MAXIMO')

const maxPrc = pedidos.reduce((acc, pedido)=>{
if (acc === null || pedido.precio > acc) {
    return pedido.precio;
}else{
    return acc;
}
}, null);

console.log(maxPrc);
console.log('-------------------------------------------------------->');
console.log('ENCONTRAR PEDIDO');
// encontrar pedido

const findPed = pedidos.reduce((acc, pedido)=>{
    
    if(pedido.nombre === "humitas"){
        return {...acc, [pedido.id]:pedido }
    }else{
        return acc;
    }
    
}, {});

console.log(findPed);
console.log('------------------------------------------------------->');
console.log('ENCONTRAR PRECIO MAYOR QUE');
// encontrar precio mayor

const preMay = pedidos.reduce((acc,pedido)=>{
            return pedido.precio >  20000;
}, true);

console.log(preMay);
console.log('------------------------------------------------------>');
console.log('CONTAR REPETICONES');
// contar pedidos que se repiten

const contRep = pedidos.reduce((acc, pedido) => {

    return {...acc, [pedido.nombre]: (acc[pedido.nombre] || 0) + 1 } 
    
}, {});

console.log(contRep);
console.log('---------------------------------------------------->');
console.log('APLANAR ARRAYS');

const archivos = [
        "index.js",
        ["comidas.js", "direcciones.js"],
        ["pedidos.js",["facturas.js", "ventas.js"]]
];

function aplanar(acc, item){
        // console.log(acc, item);
    if (Array.isArray(item)) {

        return item.reduce(aplanar, acc);
    }
    return [...acc, item];
}
aplanarArrays = archivos.reduce(aplanar, [])
console.log(aplanarArrays);


































