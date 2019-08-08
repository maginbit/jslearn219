class Cliente{

	constructor(nombre, saldo){

		this.nombre = nombre;
		this.saldo = saldo;

	}

	imprimirSaldo(){

		return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
	}
		//Los metodos STATICOS solo se puede acceder directo de la CLASE Cliente.bienvenida()
	  static bienvenida(){
	  	return `Bienvenido al cajero`;
	  }
}
	const anna = new Cliente('Anna',800000);

const cliente1 = new Cliente('Anna', 200000);


class Empresa extends Cliente{

	constructor(nombre, saldo, telefono, tipo){
			//Va hacia el el constructor padre
			super(nombre,saldo);
			//No existe en el contructor padre
			this.telefono = telefono;
			this.tipo = tipo;

	}

	//se puede rescribir un metodo statico

	static bienvenida(){
		return 'Hola Bienvenido Empresa';
	}

}

const empresa = new Empresa('Amezon', 40000, 224300690, 'E-comerce');

console.log(empresa.imprimirSaldo());
console.log(cliente1.imprimirSaldo());
console.log(Empresa.bienvenida());


