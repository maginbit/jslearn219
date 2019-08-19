//Async Await

async function obtenerClientes(){
  //crear un promise, resolve(se cumple), reject(rechaza).

  const clientes = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Clientes descargados...');
      //Se crea una simulacion que el servidor se demora 3 segundos.
      //En la realidad no se sabe cuanto se demorara en cargar
    }, 3000);

  });

  //error o no...
  const error = false;// si hay un error quiere decir que no se cumple el promise
  if (!error) {
      /* lo que hace el 'await' es esperar, va detener la ejecucion
        hasta que el promise se haya ejecutado, se cumpla.
        Por eso es importante utilizar AWAIT  ya que nos permite
        trabajar con tiempos de espera de las respuestas de los 
        servidores
      */ 
    const respuesta = await clientes;
     return respuesta;
  }else{
    //en caso que haya un error el promise envie un reject()
    await Promise.reject('hubo un error');
  }
}

obtenerClientes()
.then(res => console.log(res))
.catch( error => console.log(error));
