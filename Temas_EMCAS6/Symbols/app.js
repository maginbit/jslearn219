// symbol
/*JS tiene 5 datos primitivos, 
en la nueva version agregaron el symbols,
cada symbol es diferente al otro, cada
symbol() tiene sus propios valores,
para definir una propiedad symbol siempre debe
ir con conchertes (cliente[nombre]). Los
Symbols se concideran datos privados por ende
no se pueden iterar */

const simbolo = Symbol();
const simbolo2 = Symbol('Descripcion aqui');
console.log(Symbol() === Symbol());
console.log(simbolo);
console.log(simbolo2);

//----------Ejemplo

console.log('---Ejemplo de symbol---');
console.log();

let nombre = Symbol();
let apellido = Symbol();


let persona = {};
persona.nombre = 'Juan';
persona.telefono = 22323322;//se pueden definir elementos del arreglo sin haberlos definido antes.
persona[nombre] = 'Anna';
persona[apellido] = 'Castellon';
persona.tipoCliente = 'Normal';
console.log(persona);
console.log(typeof persona.telefono);
console.log(persona[apellido]);


//Iteracion de Objeto con datos Symbols
console.log('-- iteracion ---');
console.log();

for(let i in persona){
console.log(`${i} : ${persona[i]}`);
}