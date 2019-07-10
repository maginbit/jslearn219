
//crear un arreglo

const numeros =[30,23,51,78,15,43];

//arreglo de string 

const dias = new Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado');
console.log(typeof dias);
console.log(dias);
console.log(dias.indexOf('Jueves'));
console.log(Array.isArray(dias));
console.log(dias[3]);
dias[3] = 'Miercoles Primero';
dias.push('Miercoles Tercero');
console.log(dias[3]);
//añadir al inicio del arreglo
dias.unshift('Dia 0');
//eliminar elemento de un arreglo
dias.pop();
//eliminar un elemento el primero
dias.shift();
//quitar un rango otine solo 2 elementos
dias.splice(2);
//dias.splice(2, 3);
//revertir
dias.reverse();
console.log(dias);
console.log('.............');

//uunir dos arreglos

let arrg1 = [1,2,3],
    arrg2 = [4,5,6];

let arrg3 = [7,8,9];

console.log(arrg1.concat(arrg2).concat(arrg3));

//Ordenar un arreglo

let frutas = ['Uva','Manzana','Plantano','Pera','Frutilla','Arandano'];
console.log(frutas.sort());


//ordenar numeros
console.log('....................');
let numerosArrg = [32,64,12,56,1,22,86,10,3];
numerosArrg.sort(function(a,b){
	return a-b;
});
console.log(numerosArrg);

console.log('-----------------------');

let arrg4 = [1,4,3,5,3,6,5];
console.log(arrg4);
	arrg4 = ['Lapiz','Regla','Papel'];
console.log(arrg4);
	