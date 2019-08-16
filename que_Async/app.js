console.log('Código Sicrono o synchronus');

/*
  Codigo Sincrono o synchronous
  -----------------------------
  *El codigo synchromous si tienes un programa de 2 lineas, 
  la linea 2 no puede empezar sin haber terminado la linea 1

  * Un Ejemplo de l a vide real es: La linea del supermcado
  
  Codigo asincrono o asynchronous
  -------------------------------

  * En el codigo asynchronous puedes tener 2 lineas de codigo
    y la linea 2 ejecutarse y finalizar antes que la linea 
    uno termino de hacerlo.
  
  *Ejemplo : Restaurant
   
   En JAVASCRIPTS
   --------------

   * La mayor parte de las veces que escribas codigo asincrono
      sera cuando se interactue con una API o REST API
   *XMLHTTPRequest y Fetch API son ejemplos de codigo
    asincrono.
   *JQuery es otro ejemplo de un libreria de este tipo.    
    
    *Tendras a tu disposicion las siguientes funciones para 
     crear codigo asincrono.
     
        -Callbacks
        -Promises
        -Async/Await
 */


//Los callback : Se Aprecian como la piedra angular del trabajo asincrono, son como una especie de cadeana.
console.log('------------------------------------');
console.log('------- CALLBACK--------------------');
//Listado de Paises

const paises = ['Chile','Peru','Argentina','Bolivia','Ecuador','Paraguay'];

//Se agrega un nuevo pais despues de 2 segundos.

function nuevoPais(pais, callback){

    setTimeout(function(){
      paises.push(pais);
      callback();
    }, 2000);
}

//Los paises se muestrar despues de 1 segundo.

function mostrarPaises(){
  setTimeout(function(){
      let html = '';
      paises.forEach( function(pais) {
          html += `<li><b> ${pais}</b></li>`;
      });
      document.getElementById('app').innerHTML = html;
  });
}

//Agregar nuevo pais
nuevoPais('Brasil',mostrarPaises);

//Mostrar paises

mostrarPaises();

console.log('------------------------------------');
console.log('------- END CALLBACK----------------');

console.log('------------------------------------');
console.log('------- PROMISES -------------------');

/*
Los promises se utilizan arto en la REST API. El metdo resolve esta
ligado a el metodo then y el metodo reject al metodo catch
 */

const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento = false;
    if (descuento) {
       resolve('Se aplico Descuento');
    }else{

      reject('No se aplico descuento');
    }
});

aplicarDescuento.then(function(resultado){
   console.log(resultado);
}).catch(function(error){
  console.log(error);
});