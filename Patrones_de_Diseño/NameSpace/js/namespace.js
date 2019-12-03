/*Tratra de evitar la colicion de nombres por medio de nombres unicos */

const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio:7000
    },
    {
        platillo: 'Hamburguesa',
        precio:2600
    },
    {
        platillo: 'Hot dog',
        precio:1200
    }
];

//funciones

restaurApp.funciones = {
    ordenar : id =>{
        console.log(`
        Tu Platillo : ${restaurApp.platillos[id].platillo} se esta preparando 
        `);
    },
    agregarPlatillo: (platillo, precio) =>{
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos =>{
        console.log(`Bienvenido a nuestro Menu:`);
        platillos.forEach((platillo, index)=> {
                console.log(`${index}: ${platillo.platillo} ${platillo.precio}`);
        });
    }
}


console.log(restaurApp);
//destructuring
const {platillos} = restaurApp;
restaurApp.funciones.agregarPlatillo('Cazuela',2500);
restaurApp.funciones.mostrarMenu(platillos);

restaurApp.funciones.ordenar(2);