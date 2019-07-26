//object Create

const Cliente = {

	imprimirSaldo: function(){
		return `Hola ${this.nombre} tu saldo es ${this.saldo}`;


	},
	retirarSaldo: function(retiro){
		return this.saldo -= retiro;
	}
}

//Crear el objeto

const ana = Object.create(Cliente);

ana.nombre = 'Ana';
ana.saldo = 40000;

ana.retirarSaldo(10000);

console.log(ana.imprimirSaldo());