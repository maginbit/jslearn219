//Aqui estara el codigo que presenta la funcionlidad de la aplicacion
import {API} from './api.js';
import * as UI from './interfaz.js';
console.log(UI);

UI.formularioBuscar.addEventListener('submit', (e) =>{
    e.preventDefault();

    //Obtner datos del formulario

    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;
          console.log(artista);
          console.log(cancion);
     //campos vacios 
  if (artista === '' || cancion === '') {
      //mostrar error
    UI.divMensajes.innerHTML = 'Error... Todos los campos deben ser completados';
    UI.divMensajes.classList.add('error');

        setTimeout(() => {
            //borrar mensaje error
            UI.divMensajes.innerHTML ='';
            UI.divMensajes.classList.remove('error');
            //borrar campo de texto
            document.querySelector('#artista').value = '';
            document.querySelector('#cancion').value = '';
        },3000);
      
  }else{
    //el formulario esta completo, consultar a la API
    UI.divResultado.textContent = '';
    const api = new API(artista,cancion);
        api.consultarAPI()
            .then(data => {
                //console.log(data);
                if (data.respuesta.lyrics) {
                    //la cancion existe
                    console.log('Hay datos');
                    //mostrar la cancion
                    UI.divResultado.textContent = data.respuesta.lyrics;


                }else{
                    console.log('No Datos');
                    //LA cancion no existe
                    UI.divMensajes.innerHTML = 'La cancion No existe, prueba con otra';
                    UI.divMensajes.classList.add('error');
                    setTimeout(() => {
                        UI.divMensajes.innerHTML = '';
                        UI.divMensajes.classList.remove('error');
                        //limpiar campos especificos
                        document.querySelector('#artista').value = '';
                        document.querySelector('#cancion').value = '';
                        //reset limpia todos los campos
                        //UI.formularioBuscar.reset();
                    },3000);
                }
            });
  }       

});