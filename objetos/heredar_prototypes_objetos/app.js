

function Cliente(nombre, saldo){
	
	this.nombre = nombre;
	this.saldo = saldo;

}

//prototipo que imprime saldo y nombre

Cliente.prototype.nameClient = function(){
	
	return `Nombre : ${this.nombre}, Tu saldo es de ${this.saldo}`;

};
const cliente = new Cliente('Anna', 600.000);

console.log(cliente);

//Banca para empresa.

function Empresa(nombre, saldo, telefono, tipo){
    Cliente.call(this, nombre, saldo);
	this.telefono = telefono;
	this.tipo = tipo;



}

//Acceder a la funcion del cliente desde el objeto empresa

Empresa.prototype = Object.create(Cliente.prototype);

const empresa1 = new Empresa('Udemy',400, 5622764300,'Educacion');

console.log(empresa1.nameClient());




