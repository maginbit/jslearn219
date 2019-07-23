//string

const name1 = 'jose';
const name2 = new String('Anna');

//Numeros

const num1 = 332;
const num2 = new Number(500);

//Boolean

const bool1 = true;
const bool2 = new Boolean(false);

//Funciones 

const func1 = function(a,b){
	return a+b;
}

const func2 = new Function('a','b', 'return 1+2');

//objetos
const pers1 = {
	nombre : 'Jose'
}

const pers2 = new Object({

	nombre: 'Anna'
});

//Arregloos

const arrg1 = [1,2,3,4,5];
const arrg2 = new Array(2,3,4,2,5);