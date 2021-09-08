let users = [];
let products = [];

const elem = 50000;

/**
 * nombres al azar desde el arreglo de nombres
 * 
 */
 const nombres = ['Ana','Jose','Tomas','Alicia','Denis','Juan', 'Lupe','Camilo','Pamela','Antonio'];
 const productos =['Azucar','Manajar', 'Pan','Detergente','Pollo','Carnte','Manzanas','Limones','Fosforos','Mermelada'];


 const nameRandom = (min, max)=>{
      const num = Math.round((Math.random() * (max-min) +min));
      return num;
 }


 /** LLenar objeto users */
for (let i = 0; i < elem; i++) {
     const numName = nameRandom(0, nombres.length-1);
    const randomName =  `${nombres[numName]}${i}`;
    // console.log(numName);
    users.push({id:i, nombre:randomName});
    
    
}

// console.log(users);

/**
 * Llenar arreglo de productos
 */

for (let y = 0; y < elem; y++) {
    
    const numProd = nameRandom(0, productos.length-1);
    const randomProd =`${productos[numProd]}${y}`;
    products.push({
        id:y,
        nombre:randomProd,
        user_id: Math.floor(Math.random()* users.length)
    })
    
}
// console.log(products);

console.time(1);


const mezclados = products.map(x=>({
    ...x,
    usuario: users.find(y =>y.id === x.user_id)
}))

console.timeEnd(1);

console.log(mezclados);


