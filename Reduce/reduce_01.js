// funcion reducer
const reducer = (acumulador, valorActual) => nuevoAcumulador;

// const reducido = [].reduce((acc, el) => acc + el, 0);

const numeros = [1,2,3,4,5]
const tragos = [
    {"drinkName":"Small Soda", "calories":150, "size":12},
    {"drinkName":"Soda", "calories":150, "size":12},
    {"drinkName":"Large Soda", "calories":410, "size":32, "carbs":110},
    {"drinkName":"Small Coke", "calories":150, "size":12},
    {"drinkName":"Medium Coke", "calories":250, "size":20 },
    {"drinkName":"Regular Coke", "calories":250, "size":20 },
    {"drinkName":"Coke", "calories":150, "size":12},
    {"drinkName":"Large Coke", "calories":410, "size":32 },
    {"drinkName":"Coca-Cola", "calories":150, "size":12 },
    {"drinkName":"Coca Cola", "calories":150, "size":12 },
    {"drinkName":"Small Pepsi", "calories":150, "size":12},
    {"drinkName":"Medium Pepsi", "calories":250, "size":20, "carbs":69},
    {"drinkName":"Large Pepsi", "calories":300, "size":24},
    {"drinkName":"Pepsi", "calories":150, "size":12},
    {"drinkName":"Small Sprite", "calories":150, "size":12},
    {"drinkName":"Sprite", "calories":150, "size":12},
    {"drinkName":"Diet Sprite", "calories":0, "size":20 },
    {"drinkName":"Sprite Zero", "calories":0, "size":20 },
    {"drinkName":"Medium Sprite", "calories":250, "size":20 },
    {"drinkName":"Large Sprite", "calories":410, "size":32, "carbs":110 },
    {"drinkName":"Medium Grape Fanta", "calories":300, "size":20},
    {"drinkName":"Grape Fanta", "calories":300, "size":20},
    {"drinkName":"Small Grape Fanta", "calories":180, "size":12},
    {"drinkName":"Large Grape Fanta", "calories":480, "size":32},
    {"drinkName":"Small Orange Fanta", "calories":160, "size":12},
    {"drinkName":"Orange Fanta", "calories":270, "size":20},
    {"drinkName":"Fanta", "calories":270, "size":20}, 
    {"drinkName":"Medium Orange Fanta", "calories":270, "size":20},
    {"drinkName":"Orange Crush", "calories":160, "size":12 },
    {"drinkName":"Large Crush", "calories":320, "size":24 },
    {"drinkName":"Small Hi-C", "calories":160, "size":12 },
    {"drinkName":"Hi-C", "calories":320, "size":24 },
    {"drinkName":"Diet Mountain Dew", "calories":0, "size":20 },
    {"drinkName":"Mountain Dew", "calories":170, "size":12},
    {"drinkName":"Mtn Dew", "calories":170, "size":12},
    {"drinkName":"Mt Dew", "calories":170, "size":12},
    {"drinkName":"Large Mt Dew", "calories":410, "size":32 },
    {"drinkName":"Large Mountain Dew", "calories":410, "size":32 },
    {"drinkName":"Mtn Dew Baja Blast", "calories":170, "size":12},
    {"drinkName":"Baja Blast", "calories":170, "size":12},
    {"drinkName":"Blast", "calories":170, "size":12},
    {"drinkName":"Mountain Dew Baja Blast", "calories":170, "size":12 },
    {"drinkName":"Baja Blast Mountain Dew", "calories":170, "size":12 },
    {"drinkName":"Large Baja Blast Mountain Dew", "calories":410, "size":32 },
    {"drinkName":"Small Powerade", "calories":90, "size":14},
    {"drinkName":"Medium Powerade", "calories":120, "size":20},
    {"drinkName":"Powerade", "calories":120, "size":20},
    {"drinkName":"Large Powerade", "calories":170, "size":28},
    {"drinkName":"Fruit Punch", "calories":260, "size":16 },
    {"drinkName":"Small Fruit Punch", "calories":200, "size":12 },
    {"drinkName":"Medium Fruit Punch", "calories":260, "size":16 },
    {"drinkName":"Large Fruit Punch", "calories":390, "size":24 },
];

/* indexar arreglo de tragos, este metodo reduce ayuda en los casos donde se tenga gran cantidad
 de informacion y al momento de consultar por algo en especifico, la consulta sea eficiente y  no se haya 
 necesidad de  utilizar el metodo find, que este consume mucho tiempo.

*/

const indexed = tragos.reduce((acc, el) => ({
    ...acc,
    [el.drinkName]: el,
}), {});

console.log(indexed);
console.log(indexed['Blast']);
console.log('.........................................................');
console.log('Dejar un array dentro de array en uno solo array');

const anidado = [1,[2,3],4, [5]];

const plano = anidado.reduce((acc, el) => acc.concat(el), []);

console.log(plano);