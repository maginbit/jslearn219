/*
  En JavaScript, las declaraciones (por ejemplo, de variables o funciones) 
  se mueven al principio de su scope o ámbito. Este comportamiento se conoce 
  como hoisting y es muy importante tenerlo en cuenta a la hora de programar 
  para prevenir posibles errores.

Teniendo en cuenta cómo funciona el hoisting, podemos llamar a una función 
y definirla más abajo, porque automáticamente JS la “subirá”. 
Así, este código funciona correctamente:

 */
let y;
console.log(y);
y = 2000;

// esto funciona por la variable declarada con var
marca1 = 'Amazon';

console.log(marca1);

var marca1;


// marca2 = 'Amazon';

// console.log(marca2);

// let marca2;

console.log('----------------------------');

