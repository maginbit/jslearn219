class UI {
    constructor() {

        //iniciar al api
        this.api = new API();
        //crear los markers con layerGroup
        this.markers = new L.LayerGroup();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([-33.4569400, -70.6482700], 6);
         //const map = L.map('mapa').setView([-33.4724727,-70.9100302], 6);
         //const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    //Metodo mostrar establecimientos
    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos=>{ 
                //console.log(datos);
                const resultado = datos.respuestaJSON.results;

                //ejecutar la funcion para mostrar los pines
                    this.mostrarPines(resultado);
            });
    }

    //mostrar pines
    mostrarPines(datos){
        //console.log(datos);

       //limpiar los markers
       this.markers.clearLayers();
       
       //recorrer todos los establecimientos
       datos.forEach(dato =>{
           //destructuring
           const {latitude, longitude, calle, regular, premium} = dato;
           //console.log(typeof latitude);
            //crear popup de informacion
            const opcionesPopUp = L.popup()
                  .setContent(`
                        <p>Calle: ${calle}</p>
                        <p><b>Regular:</b> $ ${regular}</p>
                        <p><b>Premium:</b> $ ${premium}</p>
                  
                  `);
           //agregar el PIN
           const marker = new L.marker([
               parseFloat(latitude),
               parseFloat(longitude)
           ]).bindPopup(opcionesPopUp);

           this.markers.addLayer(marker);
       });

       this.markers.addTo(this.mapa);

    }

    //buscador

    obtenerSugerencias(busqueda){

        this.api.obtenerDatos()
            .then(datos =>{
                //obtener los datos
                const resultados = datos.respuestaJSON.results;
                //Envir el JSON y la busqueda para el filtrado
                this.filtrarSugerencias(resultados, busqueda);
            });

    }

    //filtar las sugerencias

    filtrarSugerencias(resultado, busqueda){
        //filtrar con .filter
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1)
        //console.log(filtro);
        //mostrar los pines
        this.mostrarPines(filtro);

    }

    //Prueba Farmacias
    mostrarFarmacias(){
        this.api.obtenerDatosFarmacia()
        .then(datos=>{ 
            //console.log(datos);
            const resultado = datos.respuestaJSON;
            this.markers.clearLayers();
        resultado.forEach((element,index) => {
           
           
         if (index != 0 && index < 2000 && element[19] != '' && element[20] != ''){
            console.log(element[6] ? 'Activo' : 'Inactivo ');
            const opcionesPopUp = L.popup()
            .setContent(`
                  <p>Calle: ${element[10]}</p>
                  <p><b>Farmacia:</b> $ ${element[4]}</p>
                  <p><b>Activo:</b> $ ${element[6]}</p>
            
            `);
            //const latitude = element[19]; 
            //const longitude = element[20];
        
            
            //agregar el PIN
           const marker = new L.marker([
            parseFloat(element[19]),
            parseFloat(element[20])
            ]).bindPopup(opcionesPopUp);

            this.markers.addLayer(marker);
         }            
        });

        this.markers.addTo(this.mapa);
          

            //ejecutar la funcion para mostrar los pines
               // this.mostrarPines(resultado);
               //console.log(resultado);
        });
    }

    

}