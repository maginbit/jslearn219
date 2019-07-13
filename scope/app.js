var a = 'a';
let b = 'b';
const c = 'c';

function fScope(){
	var a = 'A';
	let b = 'B';
	const c = 'c';
}

fScope();

if(true){
	var a = 'AA';
	let b = 'BB';
	const c = 'CC';
	console.log('Bloque : '+ a,b,c);
}

console.log('GLOBALES: '+ a,b,c);





















