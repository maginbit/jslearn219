//arreglos de objetos

const autos = [
				{modelo:'mustang',motor: 5.0},
				{modelo:'Camaro', motor: 5.6},
				{modelo:'Challenfer', motor: 6.2}
			  ];

for (var i = 0; i < autos.length; i++) {
	console.log(`${autos[i].modelo} ${autos[i].motor}`);
}
console.log(autos);

autos[0].modelo = 'Focus';

console.log(autos);

