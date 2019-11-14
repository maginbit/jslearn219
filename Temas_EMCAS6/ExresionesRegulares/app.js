//Expresiones Regulares

let valor, expReg, expRegFecha, expRegularHora;

expReg = /[0-9]/;//es igual a /[0123456789]/

valor = 437;
/* el metodo test permite comparar */
//console.log(expReg.test(valor));

// una fecha en exp regualar 28-18-2018
expRegFecha = /\d\d-\d\d-\d\d\d\d/;

valor = '28-18-2016';

//console.log(expRegFecha.test(valor));

expRegularHora = /\d\d:\d\d/;

valor = '14:40';

expReg = /\d+/;
valor = 14530049932;

//Negar que sean numeros
expReg = /[^0-9]/;
let vvalor = 2342;
//console.log(expRegularHora.test(vvalor));
//La sintaxis (1,2);
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2016';
valor = '1-2-2014';
valor = '21-300-2016';
valor = '15-3-2018';

//letras o numeros

expReg = /\w+/;
valor = 'Mensaje de prueba';
valor = 12333;
valor = '  ';

// revisar que sean puros numeros

expReg = /\d+/;
valor = 1224;
valor = 'Hola';

expReg = /([0-9])\w+/;
valor = 1234;
valor = 'cocina';

//Texto sean puras mayusculas
expReg = /([A-Z])\w+/;
valor = 'puerta';
valor = 23112;


 console.log(expReg.test(valor));