let pedidos = [{
    entrada: 'ensalada de pepinos',
    principal: 'sajta',
    postre: "platano"
},
{
    entrada: 'ensalada de tomates',
    principal: 'silpancho',
    postre: "helado"
},
{
    entrada: 'ensalada simple',
    principal: 'sajta',
    postre: "yogurt"
},
{
    entrada: 'ensalada simple',
    principal: 'anticucho',
    postre: "yogurt"
},
{
    entrada: 'ensalada de tomates',
    principal: 'sajta',
    postre: null
}
];

let shoppingCart = [{
product: 'polera',
qty: 1,
price: 4000
},
{
product: 'Pantalones',
qty: 1,
price: 10000
},
{
product: 'Camiza',
qty: 2,
price: 5000
}
];

let soloSajta = pedidos.reduce((acc, elem) => {

// console.log(elem.principal);

if (elem.principal === 'sajta')
    return acc + 1;
else
    return acc;
}, 0);
console.log(soloSajta);

console.log(':::::::::::::::::::::::::::::::');
let numeros = [1, 2, [3, 4, 5], 6, 7, [8],
[9, 10]
];
const planos = numeros.reduce((acc, item) => {
return acc.concat(item)
}, []);

console.log(planos);
console.log('::::::::::::::::::::::::::::::::::::::::::');
let numeros2 =[8,3,7,9,4,0];
const min = numeros2.reduce((acc,numero) => Math.min(acc,numero))

console.log(min);
console.log(':::::::::::::::::::::::::::::::::::::::::::::::');
let total = shoppingCart.reduce(function (acc, curr, indice) {
console.log(indice,': ', acc);
return acc + curr.qty * curr.price;
},0);

console.log(total);

console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::');
const xx = [{value:5}, {value:10}].reduce((previousValue, currentValue) => { return {value: previousValue.value + currentValue.value}})
console.log(xx);