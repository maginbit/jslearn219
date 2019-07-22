//creaer objetos
function Cliente(nombre, saldo){
	this.nombre = nombre;
	this.saldo = saldo;
	this.tipoCliente = function(edad){

		let tipo;

		if (this.saldo > 1000) {

			tipo = 'Gold';
	
	}else if (this.saldo > 500) {
		tipo = 'Platinum';
	}else{

		tipo = 'Normal';
	}
	return tipo;
	}
}

const persona = new Cliente('Anna', 2000);

const Jose = new Cliente('Jose', 700);

//console.log(persona);
//console.log(persona.tipoCliente());
//console.log(Jose.saldo);


let personas = [];
let person;

for (var i = 0; i < 100; i++) {
	
		person= new Cliente(`persona${i}`, 50*i);
		personas.push(person);

}

console.log(personas);

let G = 0;
let P = 0;
let N = 0;
let html = '';
let indicadores;

personas.forEach( function(element, index) {
	// statements
	 console.log(element.tipoCliente());

	 if (element.tipoCliente() === 'Gold') {
	 		G++;
	 }else if (element.tipoCliente() === 'Platinum') {
	 	P++;
	 }else {
	 	N++;
	 }

});


indicadores = {G,P,N};

console.log(`Gold : ${G}`);
console.log(`Platinum : ${P}`);
console.log(`Normal : ${N}`);

//console.log(indicadores);

console.log(indicadores);

for(let i in indicadores){
	html += `<tr>
	<td><h2>${i} :</h2></td>
	<td><progress id="i" max="100" value="${indicadores[i]}"></td>
	<td><h3>  ${indicadores[i]}%</h3></td>
	</tr>`;
					

  		console.log(indicadores[i]);
}


document.getElementById('app').innerHTML = html;