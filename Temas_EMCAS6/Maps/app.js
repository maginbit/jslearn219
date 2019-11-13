//Maps : son listas ordenadas, alamacenan su contenido como llave y valor
 /* Alamezan cualquier tipo de dato, y no acepta duplicados */

 let cliente = new Map();

 cliente.set('nombre','Anna');
 cliente.set('tipo','Premium');
 cliente.set('saldo', 400000);

 console.log(cliente);

 //acceder a los valores
 console.log(cliente.get('saldo'));
 //Tamaño del map
 console.log(cliente.size);
 //Comprobar si existe
 console.log(cliente.has('tipo'));
 //Borrar elemento
 console.log(cliente.delete('saldo'));
 //Borrar todo el map
 console.log(cliente.clear());

 cliente.forEach((cliente, index) =>{

        console.log(`${index} : ${cliente}`);
 });

 //PASAR DATOS AL MAPS POR DEFAULTS

 console.log('-- valores por defaults---');

 const paciente = new Map(
     [
         ['prevision', 'afp'],
         ['habitacion', 100]
     ]
 );

 paciente.set('nombre','Danniel');
 paciente.set('habitacion',471);
 paciente.set('edad', 45);
 paciente.set('prevision', 'Colmena');

 paciente.forEach((cliente, index)=>{
    console.log(`${index} : ${cliente}`);
 });