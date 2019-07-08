//Numeros 
//todas estas variables son de tipo number
const num1 = 30,
	  num2 = 20,
	  num3 = 20.20,
	  num4 = .203,
	  num5 = -3;

console.log(typeof num4);

let resu;

resu = num1 + num2;
resu = num1 - num2;
resu = num1 * num2; 
resu = num1 / num2;
resu = num1 % num2;

//pi

resu = Math.PI;
//redondeado
resu = Math.floor(2.99);
//caudrada 
resu = Math.sqrt(num1);
//absoluto
resu = Math.abs(num3);
//potencia
resu = Math.pow(8,3);
//minimo
resu = Math.min(3,4,6,2,5,6,1,8,2);
//maximo
resu = Math.max(5,4,2,7,8,76,8,2);
//aleatorio
resu = Math.random();
//operacion 
resu = (10+34)*5



console.log(resu);