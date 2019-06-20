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