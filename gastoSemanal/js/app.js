//variables

const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal');
const formulario  = document.getElementById('agregar-gasto');
const gastos = document.getElementById('gastos');
let cantidadPresupuesto;

//clases
//clase presupuesto

class Presupuesto{

	constructor(presupuesto){
		this.presupuesto =  Number(presupuesto);
		this.restante = Number(presupuesto);
		

	}

	//Metodo para ir restando del presupuesto actual
	 presupuestoRestante(cantidad = 0){

	 	return this.restante -= Number(cantidad);

	 }
	 //Metodo presupuesto Acutlizado
	 presupuestoActualizado(cantidad = 0){
	 	return this.restante += new Number(cantidad);
	 }
}

//Clase interfaz
class Interfaz{
	insertarPresupuesto(cantidad){
		const presupuestoSpan = document.querySelector('span#total');
		const restanteSpan = document.querySelector('span#restante');

		//insertar al HTML
		presupuestoSpan.innerHTML = `${cantidad}`;
		restanteSpan.innerHTML = `${cantidad}`;
	}
    imprimirMensaje(mensaje, tipo){

    	const divMensaje = document.createElement('div');
    	divMensaje.classList.add('text-center','alert');
    	if (tipo === 'error') {
    		divMensaje.classList.add('alert-danger');

    	}else {
    		divMensaje.classList.add('alert-success');
    	}

    	divMensaje.appendChild(document.createTextNode(mensaje));
    	//insertar en el DOM
    	document.querySelector('.primario').insertBefore(divMensaje, formulario);
    	//Quitar el alert despues de 3 segundos.
    	setTimeout(function(){

    		document.querySelector('.primario .alert').remove();

    		//resetear formulario
    		formulario.reset();


    	}, 1500);

    }//metodo

    //Insertar los gastos a la lista
    agregarGastoListado(nombre, cantidad){

    	const gastoListado = document.querySelector('#gastos ul');

    	//crear un LI
    	const li = document.createElement('li');
    	li.className = 'list-group-item d-flex justify-content-between align-item-center';

    	//insertar gasto 
    	li.innerHTML = `
    			${nombre}
    			<span class="badge badge-primary badge-pill"> $ ${cantidad}</span>
    			<span class="badge badge-danger badge-pill borrar-gasto">X</span>


    	`;
           
    	//insertar gasto en el DOM
    	gastoListado.appendChild(li);
    		

    }
    //Restar Gasto a presupuesto
    presupuestoRestante(cantidad){

    		const restante = document.querySelector('span#restante');

    		//leemos los presupuestos restantes
    		 const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
    		 console.log(presupuestoRestanteUsuario);
    		 //actulizar el restante DOM
    		 restante.innerHTML = `${presupuestoRestanteUsuario}`;

    		 this.comprobarPresupuesto();
    }
    //Cambia de color el presupuesto restante
    	comprobarPresupuesto(){

    		const presupuestoTotal = cantidadPresupuesto.presupuesto;
    		const presupuestoRestante = cantidadPresupuesto.restante;


    		//comprobar 25% gasto
    		//
    		if ((presupuestoTotal /4) > presupuestoRestante) {

    			const restante = document.querySelector('.restante');
    			restante.classList.remove('alert-success','alert-warning');
    			restante.classList.add('alert-danger');

    		}else if ((presupuestoTotal /2) > presupuestoRestante) {

    			const restante = document.querySelector('.restante');
    			restante.classList.remove('alert-success');
    			restante.classList.add('alert-warning');
    		}
    		


    	}
    	


}


//Event Listener

document.addEventListener('DOMContentLoaded', function(){
	if (presupuestoUsuario === null || presupuestoUsuario === '') {

		window.location.reload();

	}else {

		// Instanciar el presupuesto
		cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
		//instanciar clase interfaz
		 const ui = new Interfaz();
		 ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
		
	}
});

//listener form

formulario.addEventListener('submit', function(e){
	e.preventDefault();

	//Leer formulario gastos
	 const nombreGasto = document.querySelector('#gasto').value;
	 const cantidadGasto = document.querySelector('#cantidad').value;

	 //Instacia la Interfaz
	 const ui = new Interfaz();

	 //Comprobar que los campos no esten vacios
	 	if (nombreGasto === '' || cantidadGasto === '') {
	 		//2 paramentros: mensaje y tipo.
	 		ui.imprimirMensaje('Hubo un error','error');
	 	}else {
	 		//insertar HTML
	 		ui.imprimirMensaje('Inserto Correactamente','bien');

	 		ui.agregarGastoListado(nombreGasto, cantidadGasto);

	 		ui.presupuestoRestante(cantidadGasto);
	 	}
});

// Listener Eliminar Gastos de lista

gastos.addEventListener('click', function(e){
e.preventDefault();

	if (e.target.classList.contains('borrar-gasto')) {

const gastoElemento = e.target.parentElement.children[0].innerText;
//console.log(gastoElemento.slice(2,gastoElemento.length));
//console.log(gastoElemento.length);

const cantidadRestante = Number(gastoElemento.slice(2,gastoElemento.length));

console.log(cantidadRestante);

//console.log(cantidadPresupuesto.presupuestoActualizado(cantidadRestante));

const cantidadAct = cantidadPresupuesto.presupuestoActualizado(cantidadRestante);

console.log(cantidadAct);
const restante = document.querySelector('span#restante');

restante.innerHTML = `${cantidadAct}`;

e.target.parentElement.remove();
		}else{
			console.log('NADA');
		}
});