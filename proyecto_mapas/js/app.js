const ui = new UI();

document.addEventListener('DOMContentLoaded',() =>{
 //ui.mostrarEstablecimientos();
 ui.mostrarFarmacias();
 
});

//habilitar busqueda de establecimientos

const buscador = document.querySelector('#buscar input');

buscador.addEventListener('input', () =>{
    //console.log(buscador.value);
    if(buscador.value.length > 5){

        ui.obtenerSugerencias(buscador.value);

    }else{
        ui.mostrarEstablecimientos();
    }
});