//destructuring forma anterior 
function reservacion(completo, opciones){
  opciones = opciones || {};// se puede enviar un objeto completo

  console.log(opciones);
}
//destructuring metodo viejo
function reservacion(completo, opciones){
    opciones = opciones || {};

    //mapear el arreglo que recibe
    let metodo = opciones.metodoPago,
        cantidad = opciones.cantidad,
        dias = opciones.dias;
   
        console.log(metodo);
        console.log(cantidad);
        console.log(dias);

}

//metodo nuevo destructuring
function reservacion(completo, opciones){
  let {metodoPago, cantidad, dias} = opciones;
  console.log('nuevo metodo');
  console.log(metodoPago);
  console.log(cantidad);
  console.log(dias);
}
//Pasar valores de arreglo por defautl
function reservacion (completo,
  {
    metodoPago = 'efectivo',
    cantidad = 0,
    dias = 0
  }){
  //cuerpo de la funcion
  
    if (completo) {
        console.log('REservacion completa');
    }else{
      console.log('REservacion Cancelada');
    }

  console.log('parametros por default');
  console.log(metodoPago);
  console.log(cantidad);
  console.log(dias);
  
}
//
reservacion(
  true,
  {
    metodoPago : 'tarjeta',
    cantidad : 2000,
    dias : 3
  }
)