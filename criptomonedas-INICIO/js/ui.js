class Interfaz{

      //el constructor como fin tiene que inicializar los que se le pase por parametro
      constructor(){
          this.init();
      }

      init(){
          this.construirSelect();
      }

    construirSelect(){
        cotizador.obtenerMonedasAPI()
                 .then(monedas => {
                     //console.log(monedas.monedas.BaseImageUrl);
                    
                     //crear un select de opciones
                     const selectDIV = document.querySelector('#criptomoneda');
                     //iterar el symbol y el nombre como opciones
                    for(const[key, value] of Object.entries(monedas.monedas.Data)){
                        //console.log(`${key} : ${value.Symbol}`);
                        const opcion = document.createElement('option');
                        opcion.value = value.Symbol;
                        opcion.appendChild(document.createTextNode(value.CoinName));
                        selectDIV.appendChild(opcion);
                    }
                 })

    }
    mostrarMensaje(mensaje, clases){

            const div = document.createElement('div');
            div.className = clases;
            div.appendChild(document.createTextNode(mensaje));

            //Seleccionar mensaje y mostrarlo en el DOM
            const divMensaje = document.querySelector('.mensajes');
            divMensaje.appendChild(div);

            //Borrar mensaje despues de un tiempo
            setTimeout(() => {
                document.querySelector('.mensajes div').remove();
            },1500);


    }

    //mostrar resultados consulta en el DOM
    mostrarResultado(resultado, moneda, crypto){
                // en caso de un nuevo resultado carga nuevamente
                const resultadoAnterior = document.querySelector('#resultado > div');
                if (resultadoAnterior) {
                    resultadoAnterior.remove();
                }
                //console.log(resultado[crypto][moneda]);
                //variable datos 
                const datosResultado = resultado[crypto][moneda];
                //definir numero decimales al precio
                let precio = datosResultado.PRICE.toFixed(2),
                porcentaje = datosResultado.CHANGEPCTDAY.toFixed(2),
                actualizado = new Date(datosResultado.LASTUPDATE * 1000).toLocaleDateString('es-CLS');
                //construir el template
                let templateHTML = `
                            <div class="card ">
                                <div class="card-body text-dark">
                                    <h2 class="card-title">Resultado:</h2>
                                    <p>El precio de ${datosResultado.FROMSYMBOL} a moneda 
                                        ${datosResultado.TOSYMBOL} es de :$ ${precio};
                                        <p>Variacion  último día : % ${porcentaje}</p>
                                        <p>Última Actualizacion : ${actualizado} </p>
                                    </p>
                                </div>
                            </div>`;
                        this.vistaSpiner('block')
                        setTimeout(() =>{
                            //insertar el resultado en el DOM
                              document.querySelector('#resultado').innerHTML = templateHTML;
                                this.vistaSpiner('none');
                        }, 2000);
             
    }

    //mostrar spiner

    vistaSpiner(estado){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = estado;
    }

  
}