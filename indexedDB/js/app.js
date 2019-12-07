let DB;

//Selectores de Interfaz
const form = document.querySelector('form'),
      nombreMascota = document.querySelector('#mascota'),
      nombreCliente = document.querySelector('#cliente'),
      telefono = document.querySelector('#telefono'),
      fecha = document.querySelector('#fecha'),
      hora = document.querySelector('#hora'),
      sintomas = document.querySelector('#sintomas'),
      citas = document.querySelector('#citas'),
      headingAdministra  = document.querySelector('#administrar');

      //Esperar el DOM este listo

      document.addEventListener('DOMContentLoaded',() => {
          //Crear la base de datos
          let crearDB  = window.indexedDB.open('citas', 1);

          //Si hay error enviar a consola
          crearDB.onerror = function(){
              console.log('Error crear Base de Datos');
          }
          //si todo esta bien entonces muestra en consola, y asignar base de datos
          crearDB.onsuccess = function(){
              //console.log('BD Creada');

            
              //Asignar a la  base de datos
              DB = crearDB.result;
              //console.log(DB);
              mostrarCitas();
        }
        //Este metodo solo corre una vez y es ideal para  el Schema
        crearDB.onupgradeneeded = function(e){
            console.log('Solo corre una vez');
            //El evento es la misma base de datos
            let db = e.target.result;
            //Definir el objectstore, toma 2 parametros, el nombre de la bd y las opciones en arreglo
            //Keypath es el indice de la base de datos
            let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true});
            //Crear  los indices y campos de la base de datos, createIndex : 3 parametros, nombre, keyPath, opciones
            objectStore.createIndex('mascota','mascota', {unique:false});
            objectStore.createIndex('cliente','cliente', {unique:false});
            objectStore.createIndex('telefono','telefono', {unique:false});
            objectStore.createIndex('fecha','fecha', {unique:false});
            objectStore.createIndex('hora','hora', {unique:false});
            objectStore.createIndex('sintomas','sintomas', {unique:false});

            console.log('Base de Datos creada y lista');
        }
        //Caundo el formulario se envia
        form.addEventListener('submit', agregarDatos);

        function agregarDatos(e){
            e.preventDefault();
            //Objeto que se inserta en indexDB
            const nuevaCita = {
                mascota : nombreMascota.value,
                cliente : nombreCliente.value,
                telefono : telefono.value,
                fecha : fecha.value,
                hora : hora.value,
                sintomas : sintomas.value
            }
            //console.log(nuevaCita);
            
            //En IndexDB se utilizan las transacciones
            let transaction = DB.transaction(['citas'], 'readwrite');
            let objectStore = transaction.objectStore('citas');
            let peticion = objectStore.add(nuevaCita);
            console.log(peticion);
        //Comprobar 
        peticion.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () =>{
            console.log('Cita Agendada');
            mostrarCitas();
        }
        transaction.onerror = () =>{
            console.log('Hubo un error');
        }
    }

    //f->Mostrar Citas
    function mostrarCitas(){
        //limpiar las citas anteriores
        while(citas.firstChild){
            citas.removeChild(citas.firstChild);
        }
        //creamos un objectstore
        let objectStore = DB.transaction('citas').objectStore('citas');

        //Esto retorna ina peticion
        objectStore.openCursor().onsuccess = function(e){
            //Cursor se va a ubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;

            //console.log(cursor);
            if (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');

                citaHTML.innerHTML = `
                    <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                    <p class="font-weight-bold">Dueño: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                    <p class="font-weight-bold">Telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                    <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                    <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                    <p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>


                `;
                //Boton de Borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden="true">x</span>Borrar';
                botonBorrar.onclick = borrarCita;
                citaHTML.appendChild(botonBorrar);
                
                // append en el padre
                citas.appendChild(citaHTML);

                //el cursor debe continuar si hay registro y no se quede en el primero
                cursor.continue();
            }else{
                if(!citas.firstChild){
                    //Cuando no hay registros
                    headingAdministra.textContent = 'Administra tus citas';

                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                }else{
                    //Caundo hay registro
                 headingAdministra.textContent = 'Administra tus citas';

                }
            }
        }
    }

    //f->Borrar citas
    function borrarCita(e){
       let citaID  = e.target.parentElement.getAttribute('data-cita-id');
             //En IndexDB se utilizan las transacciones
             let transaction = DB.transaction(['citas'], 'readwrite');
             let objectStore = transaction.objectStore('citas');
             let peticion = objectStore.delete(citaID);

             //Eliminar del DOM

             transaction.oncomplete = ()=>{
                 e.target.parentElement.parentElement.removeChild(e.target.parentElement);
                 console.log(`Se Ilimino la cita con el Id: ${citaID}`);
             }
    
    }



});