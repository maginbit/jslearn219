/**
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::  REDUCE :::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::
 */

 let arrUsers = [];
 let arrProducts = [];
 
 const elem = 10;
 
 /**
  * nombres al azar desde el arreglo de nombres
  * 
  */
 const nombres = ['Ana', 'Jose', 'Tomas', 'Alicia', 'Denis', 'Juan', 'Lupe', 'Camilo', 'Pamela', 'Antonio'];
 const productos = ['Azucar', 'Manajar', 'Pan', 'Detergente', 'Pollo', 'Carne', 'Manzanas', 'Limones', 'Fosforos', 'Mermelada'];
 
 const nameRandom = (min, max) => {
     const num = Math.round((Math.random() * (max - min) + min));
     return num;
 }
 /**
  * funcion REDUCE
  */
 const keyBy = (arreglo, key) => arreglo.reduce((acumulador, valorActual) => {
     acumulador[valorActual[key]] = valorActual;
     return acumulador;
 }, {});
 
 /** LLenar objeto users */
 for (let i = 0; i < elem; i++) {
     const numName = nameRandom(0, nombres.length - 1);
     const randomName = `${nombres[numName]}-${i}`;
     // console.log(numName);
     arrUsers.push({
         id: i,
         nombre: randomName
     });
 }
 /**
  * Llenar arreglo de productos
  */
 for (let y = 0; y < elem; y++) {
     const numProd = nameRandom(0, productos.length - 1);
     const randomProd = `${productos[numProd]}-${y}`;
     arrProducts.push({
         id: y,
         nombre: randomProd,
         user_id: Math.floor(Math.random() * arrUsers.length)
     })
 }
 
 
 
 //:::::::::::::::::::::::::::::
 // console.log(':::::>>>',arrUsers[0]['nombre']);
 //::::::::::::::::::::
 //arreglo de usuario con reduce
 const arrKeyedUsers = keyBy(arrUsers, 'id');
 
//  console.log(arrKeyedUsers);
 console.log('<<<<:::::::::::::::::::::::::::>>>>');
//  console.log(arrUsers);

 console.time(1);
 // const arrMezclados = arrProducts.map(x=>({
 //     ...x,
 //     usuario: arrUsers.find(y =>y.id === x.user_id)
 // }));
 
 const arrMezclados = arrProducts.map(x => ({
     ...x,
    //  usuario1: arrUsers[x.user_id],
     usuario: arrKeyedUsers[x.user_id]
 }));
 
 console.timeEnd(1);
 
//   console.log(arrMezclados[0].usuario.nombre);

 /**
  * -------------------------------------------
  * -------------------------------------------
  * 
  */
//  console.log(arrProducts);

//   console.log(arrMezclados);
 
  const cantidadNombre = arrMezclados.reduce((acc, elem)=>{
            // console.log(elem.user_id);
            // console.log(elem.nombre.includes('Manjar'));
           
        //    acc[elem.usuario.nombre] ={ contador: (acc[elem.usuario.nombre] || 0) +1,nombre: elem.nombre }
        // acc[elem.nombre] = (acc[elem.nombre] || 0) +1;
        acc[elem.usuario.nombre] = (acc[elem.usuario.nombre] || 0) +1;
           return acc;
  },{});

