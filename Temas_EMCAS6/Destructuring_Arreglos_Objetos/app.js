//Destructuring : Ayuda a extraer valores de un objetos , de arreglos


const ciudades = ['Londres','New York','Madrid','Paris','Barcelona'];

//const [primeraCiudad, segundaCiudad] = ciudades;
//console.log(primeraCiudad);
//console.log(segundaCiudad);
//obtener posicion espesifica

const [, , , , barca] = ciudades;


console.log(barca);

console.log('............................................');

const cliente = {

      tipo : 'Premium',
      saldo : 400000,
      datos : {
          nombre : 'Pedro',
          apellido : 'Roldan',
          residencia : {
              ciudad : 'Chicago'
          }
      },
      movimientos : [
        '12-03-2016',
        '20-05-2017',
        '25-11-2018'
      ]
}

let {
    tipo,
    datos,
    movimientos : [uno,dos,tres],
    datos : {residencia}
} = cliente;

console.log(residencia.ciudad);
console.log(tres);
console.log(datos.nombre);












