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
console.log(auto);
console.log(typeof auto);
for(let a in auto){
  console.log(`${a} : ${auto[a]}`);
}





console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');


for (var i = 0; i < 5; i++) {
	//console.log(i);
	setTimeout(function(){

		//console.log(i);
	},i * 1000);
}

console.log('------------------------------------------');
console.log('-----Iteradores ya incluidos -------------');
console.log('------------------------------------------');


const ciudades = ['Londres','New York','Madrir','Paris'];
const ordenes = new Set([10,20,30,40,50]);
const datos = new Map();
datos.set('nombre','jose');
datos.set('profesion','Panadero');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

console.log('-----iterador entries() -------------');


for(let entrada of ciudades.entries()){
	console.log(entrada);
}

for(let entrada of ordenes.entries()){
		console.log(entrada);
}

for(let entrada of datos.entries()){
	console.log(entrada);
}


console.log('-----iterador values() -------------');


for(let entrada of ciudades.values()){//values() es el iterador por defecto
	console.log(entrada);
}

for(let entrada of ordenes.values()){

		console.log(entrada);
}

for(let entrada of datos.values()){
	console.log(entrada);
}

console.log('-----iterador keys() -------------');


for(let entrada of ciudades.keys()){
	console.log(entrada);
}

for(let entrada of ordenes.keys()){
	
		console.log(entrada);
}

for(let entrada of datos.keys()){
	console.log(entrada);
}

console.log('---------array en string-------------');


const mensaje = 'Aprendiendo Javascript';

for (var i = 0; i < mensaje.length; i++) {
	console.log(mensaje[i]);
}

// console.log('---------a sample 2-D array-------------');
// // a sample 2-D array 
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
// for (var i in a) 
// {
//    console.log("row " + i);
//    for (var j in a[i]) 
//      {
//       console.log(" " + a[i][j]);
//      }
// }
// console.log('---------a sample 2-D array ES6 Version -------------');
// // a sample 2-D array 
// const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
// for (const i in a) 
// {
//    console.log(`row ${i}`);
//    for (const j in a[i]) 
//      {
//       console.log(` ${a[i][j]}`);
//      }
// }



console.log('------------------------------------------');
console.log('----- Array objetos -------------');
console.log('------------------------------------------');


let products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];

function listProducts(prods) {

  let product_names = [];
  for (let i=0; i<prods.length; i+=1) {
   product_names.push(prods[i].name);
  }
  return product_names;
}

console.log(listProducts(products));


function totalValue(prods) {
  let inventory_value = 0;

  for (let i=0; i<prods.length; i+=1) {

    inventory_value += [prodsi].inventory * prods[i].unit_price;
  }
  return inventory_value;
}

//console.log(totalValue(products));
const seen = new Set();
const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test3" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" }
];

const filteredArr = arr.filter(el => {
  const duplicate = seen.has(el.id);
  seen.add(el.id);
  return !duplicate;
});

//-------------------------------------------->
//-------------------------------------------->
console.log('------------------------------------------');
console.log('------------------------------------------');
//Your JSON should look like this:

var json = [{
    "id" : "1", 
    "msg"   : "hi",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];

for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
}
console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');

var data = '{"employees":\n\
  [{"908887" : {"firstName":"John", "lastName":"Doe"}},\n\
   {"98764" : {"firstName":"Anna", "lastName":"Smith"}},\n\
   { "98762" : {"firstName":"Peter", "lastName":"Jones"}}]}';  


var empObj = JSON.parse(data);

empObj.employees.forEach((item) => {

  Object.entries(item).forEach(([key, val]) => {

    console.log(`key-${key}-val-${JSON.stringify(val)}`)

  });
});
console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');

var data = '{"employees":[{"908887" : {"firstName":"John", "lastName":"Doe"}},{"98764" : {"firstName":"Anna", "lastName":"Smith"}},{ "98762" : {"firstName":"Peter", "lastName":"Jones"}}]}';


var empObj = JSON.parse(data);

empObj.employees.forEach(function(value, index) {
  Object.keys(value).forEach(function(v, i) {
    console.log('key - ' + v + '\nvalue - ' + JSON.stringify(value[v]));
  });

});
console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');

var dictionary = {
    "data": [
        {"id":"0","name":"ABC"},
        {"id":"1","name":"DEF"}
    ],
    "images": [
        {"id":"0","name":"PQR"},
        {"id":"1","name":"xyz"}
    ]
};

var data = dictionary.data;

for (var i in data)
{
     var id = data[i].id;
     var name = data[i].name;
     console.log(id);
     console.log(name);
}
dictionary.images.forEach(function(item){
    console.log(item.name + ' ' + item.id);
});

for (item in dictionary) {
  for (subItem in dictionary[item]) {
     console.log(dictionary[item][subItem].id);
     console.log(dictionary[item][subItem].name);
  }
}
console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------------------------------');
var dictionary = {
    "employee1":[
        {"id":"0","name":"Google"},
        {"id":"1","name":"eBay"}
    ],
    "employee2": [
        {"id":"2","name":"Yahoo"},
        {"id":"3","name":"Facebook"}
    ]
};

	var employee1 = dictionary.employee1;
	var employee2 = dictionary.employee2;
 
	for ( var i in employee1) {
		var id = employee1[i].id;
		var name = employee1[i].name;
		console.log(id);
		console.log(name);
	}
 
	for ( var i in employee2) {
		var id = employee2[i].id;
		var name = employee2[i].name;
		console.log(id);
		console.log(name);
	}

  
console.log('------------------------------------------');
console.log('-----------PUSH           ----------------');
console.log('------------------------------------------');



  const fruits = ["Banana", "Orange", "Apple", "Mango"];


  
  fruits.push("Kiwi");

  console.log(fruits);
  let frutList = [];
for (var i = 0; i < 2; i++) {
    //let fruta = prompt('insertar fruta');
    //frutList.push(fruta);

  }

  console.log(frutList);
console.log('------------------------------------------');
console.log('-----------new array ----------------');
console.log('------------------------------------------');

    var ddData = [];
    
    for(var i=0; i<5; i++){
       // Tu fecha
       var dataFecha=i;
       // Creas un nuevo objeto.
       var objeto =   {
                // Le agregas la fecha
                fecha: dataFecha,
                text: "Foursquare"
       }
      //Lo agregas al array.
      ddData.push(objeto);
    } 
    
    for ( x in ddData) {
        console.log( ddData[x] );
    }