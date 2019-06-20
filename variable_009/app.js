// hay 3 formas de ceclarar variables var - let -const
// var la forma antigua
// let-const = forma nueva
var nombre = 'jose';//puede ser comillas dobles o simples "" o ''
nombre = 'maria';//sobreescribe el primer nombre
var nombre = "Juan";//sobre escribe el segundo nombre
console.log(nombre);


/*
undifined ejemplo
 
var carrito;
console.log(carrito);
 */

//inicializar variable
  	var carrito;
//	inicializar varias variables

    var carrito = 'libro',
        carrito1= 'libro2',
        carrito2= 'libro3';

        console.log(carrito2);
//nomesclatura variables

	var producto;
	//var 2019producto; NO PUEDE TENER NUMEROS O CARACTERES AL PRINCIPIO        
	
var x=230,
    z=40;
    var sum=x+350+z*3;
console.log(sum);   
console.log('......................');

var x = 0;
var j = '';
var h = '';

var k=1;
while(x<13){
for (var i = 1; i < 11; i++) {
	


console.log(x+'*'+i+'='+x*i);
//document.getElementById('app').innerHTML = '<li id="a'+x+'">'+x+'</li>'

j=j+'<td><p id="a'+x+'">'+x+'*'+i+'='+x*i+'&nbsp|&nbsp</p></';
}
 h=h+j+' </td>'; 
j='';
x++;
} 

console.log(j);
document.getElementById('app').innerHTML = h;

console.log('...............');
// esto es una Template String
var saludo = `¡Hola Mundo!`;

// esto es una cadena normal con comillas simples
var saludo = '¡Hola Mundo!';

// esto es una cadena normal con comillas dobles
var saludo = "¡Hola Mundo!";

// Sustitución simple de cadenas
var nombre = "Juan";
console.log(`¡Hola ${nombre}!`);

// resultado => "¡Hola Juan!"

var a = 10;
var b = 10;
//console.log(`¡JavaScript se publicó hace ${a+b} años!`);

// resultado => ¡JavaScript se publicó hace 20 años!

//console.log(`Existen ${2 * (a + b)} frameworks JavaScript y no ${10 * (a + b)}.`);
// resultado => Existen 40 frameworks JavaScript y no 2000.

var usuario = { 
    nombre: 'Juan Perez',
    edad:25,
    correo:'juan@gmail.com',
    fono:'555555',
    direccion:'Las Plameras # 4232'
};
//console.log(`Estás conectado como ${usuario.nombre.toUpperCase()}.`);

// resultado => "Estás conectado como JUAN PEREZ.";

var divisa = 'Euro';
//console.log(`Los precios se indican en ${divisa}. Utiliza nuestro conversor para convertir ${divisa} en tu moneda local.`);
// resultado => Los precios se indican en Euro. Utiliza nuestro conversor para convertir Euro en tu moneda local.
var largo = Object.keys(usuario).length;
//var size = Object.size(usuario);

//console.log(largo);
console.log(usuario.fono);


for(key in usuario){
   console.log(usuario[key]);
}


console.log('.................');
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const keys = Object.keys(fruits)
console.log(keys) // [apple, orange, pear]

console.log('..........................');

const fruits2 = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const values2 = Object.values(fruits2)
console.log(values2) // [28, 17, 54]

console.log('..........................');

var autos = [
    'nissan',
    'ford',
    'toyota',
    'reno',
    'kia',
    'hyndai'
            ];

console.log(autos.length);

autos.forEach( function(element, index) {
    // statements
    
    console.log(index,element);
    
});

for (var i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}