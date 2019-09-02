class EventBrite{

    constructor(){
        this.token_auth = '';
        this.ordenar = 'date';
    }
    //Mostrar resultados de la busqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
        //esperar y devolver como json
        const eventos = await respuestaEvento.json();

        return{
            eventos
        }
    }

    //obtener las categorias en init()
    async obtenerCategorias(){
        //Consultar las categorias  a la REST API de event brite
        
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        //esperar respuesta devolver json
        const categorias = await respuestaCategorias.json();

        //devolver resultado
        return{
            categorias
        }
    }

    
}