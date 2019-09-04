//Destructuring : Ayuda a extraer valores de un objetos , de arreglos


// Metodo anterior

const cliente = {
  nombre : 'Jose',
  profesion : 'Contador'
}

let nombre = cliente.nombre,
    profesion = cliente.profesion;

console.log(nombre);
console.log(profesion);

//metodo Nuevo destructuring

const cliente2 = {
  nombre2 : 'Anna',
  profesion2 : 'Abogada'
}

let {nombre2, profesion2} = cliente2; //buscara el objeto cliente2
/*Se pude haceder a un solo nombre
  ej: let{nombre2} = cliente2
  console.log(nombre2);
  -----
  Aun cuando se reasigne valor a  la variable, con la
  asigncion del objeto este tomara los valores
  de la variable del objeto, aun cuando esten en el scope 
  global.
  ej:
      nombre =  'Pedro';
      profesion = 'Mecanico'
      ({nombre, profesion} = cliente2);

      console.log(nombre);// Anna
      console.log(profesion);//Abaogada
*/

console.log(nombre2);
console.log(profesion2);

console.log('-------- Acceder aun objeto dentro de otro objeto --------');

const client = {
    type : 'Prmium',
    name : 'Antonio',
    data : {
        locations : {
            city : 'New York',
            country : 'USA'
        },
        check : {
           from : '10-12-1950',
           wallet : 600000
        } 
    }
}

let {data : {locations, check}} = client;
 
console.log(locations.city);
console.log(check.from);

let {type,name} = client;

console.log(type);

console.log('-------- Inicializar variable si no esta --------');

const perro = {

        raza : 'Pastor Belga',
        tipo : 'Malinois',
        
}
let {raza, tipo, origen = 'Belgica', peso = 35} = perro;

console.log(raza);
console.log(tipo);
console.log(origen);
console.log(peso);
























