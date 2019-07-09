const num1 = "30",
	  num2 = 10,
	  num3 = 'tres';

console.log(typeof num1);
console.log(typeof parseInt (num1));
console.log(typeof Number(num1));

console.log('....................');

let dato;

console.log(Number("20"));
console.log(Number('20.235'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number('JavaScript'));
console.log(Number([4,3,6,4,2]));

//parsefloat y parseint

console.log(parseInt('100'));
console.log(parseFloat('100'));
console.log(parseFloat('100.2345'));
console.log(parseInt('100.2345'));

// to fixed

let data;
data = 854323;
data = 854323.2876783365182;
console.log(data.toFixed(3))
data = '854323.2876783365182';

console.log(parseFloat(data).toFixed(4));

//Numero a string

let snum;
snum = 32356332;
console.log(String(2132223));
console.log(String(true));
console.log(String([2,3,4,5,2,6]));
console.log(snum.toString());
