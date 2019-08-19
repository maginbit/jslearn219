//Instanciar clases
const cotizador = new API('94ff504d39b7f19bb33bd5b32147428e53dae88c6c90bf8650520931ae23481a');
const ui = new Interfaz();



//leer formulario

const formulario = document.querySelector('#formulario');

addEventListener();

function addEventListener(){

    formulario.addEventListener('submit', (e) => {

            e.preventDefault();

            //Leer moneda seleccionada
            const monedaSelect = document.querySelector('#moneda');
            const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

            //Leer la cryptomneda seleccionada
            const criptoMenedaSelect = document.querySelector('#criptomoneda');
            const criptoMonedaSeleccionda = criptoMenedaSelect.options[criptoMenedaSelect.selectedIndex].value;

            console.log(`${monedaSeleccionada}<-->${criptoMonedaSeleccionda}`);
           
            //Comprobar que ambos campos esten seleccionado
            if (monedaSeleccionada === '' || criptoMonedaSeleccionda === '') {
                    ui.mostrarMensaje('Debe completar los campos','alert bg-danger text-center');
            }else{
                 //esta todo bien consultar la api
                 cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionda)
                 .then(data => {
                     //console.log(data);
                        ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionda );
                    }).catch(error => console.log(error));
            }
    });    
}

