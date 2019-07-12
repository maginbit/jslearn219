console.log('------------FOR-EACH--------------');


const tareas = ['Reunion','Proyecto','Reparar','Aprender' ];

tareas.forEach(function(tareas,index){
	console.log(`${index} : ${tareas}`);
});


console.log('------------MAP--------------');



const carrito = [
				{id:1,producto:'Pantalon'},
				{id:2,producto:'Camisa'},
				{id:3,producto:'Zapatos'},
				{id:4,producto:'Cinturon'},
				{id:5,producto:'chaqueta'},
					
				]

const nameProduct = carrito.map(function(carrito){

	return carrito.producto;

});



console.log(nameProduct);

console.log('------------FOR LET--------------');

const auto = {
	marca:'Chevrolet',
	modelo:'Camaro',
	motor:5.0,
	anio:1977,
	color:'red',
	conbustible:'Disel'
}
for(let a in auto){
  console.log(`${a} : ${auto[a]}`);
}







