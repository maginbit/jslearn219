class Cliente{

	constructor(nombre, apellido, saldo){

		this.nombre = nombre;
		this.apellido = apellido;
		this.saldo = saldo;

	}

	imprimirSaldo(){

		return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
	}

	tipoCliente(){

		let tipo;
		if (this.saldo > 10000) {
			tipo = 'Gold';
		}else if (this.saldo > 5000) {
			tipo = 'Platinum';
		}else{
			tipo = 'Normal';
		}
		return tipo;
	}
}
	const anna = new Cliente('Anna','Hoytezs', 800000);

console.log(anna.imprimirSaldo());
console.log(anna.tipoCliente());



