let usurios = [];
let productos = [];

const elementos = 200000;

// Metodo REDUCE
const keyBy = (arr, key) => arr.reduce( (acc, el) => {
    acc[el[key]] = el
    return acc;
});

for (let i = 0; i < elementos; i++) {
    usurios.push({ 
        id: i, 
        nombre: `nombre-usuario-${i}`
    });
}

for (let x = 0; x < elementos; x++) {
    productos.push({
        id: x,
        nombre: `nombre-producto-${x}`,
        user_id: Math.floor(Math.random()* elementos)
    });
    
}
// utilizar funcion de reduce
const keydUsuarios = keyBy(usurios, 'id');

console.log('..................................');
console.time('time');

const mezclados =  productos.map(prod =>({
    ...prod,
    usurio: keydUsuarios[prod.user_id] 
}));

console.timeEnd('time');
console.log('...................................')
console.log('mezclados', mezclados[0]);
console.log('-----------------------------------');
// usurios.forEach(element => {
//     console.log(element);
// });


// const mezclados =  productos.map(prod =>({
//     ...prod,
//     usurio: usurios.find( usr => {
//         usr.id === prod.user_id
//     }) 
// }));