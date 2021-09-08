const arrUsuarios = [
    {
        nombre: 'Anna',
        apellido: 'Rojas',
        edad:26 ,
    },
    {
        nombre: 'Jose',
        apellido: 'Martinez',
        edad:45 ,
    },
    {
        nombre: 'Tomas',
        apellido: 'Hurtado',
        edad:33 ,
    },
    {
        nombre: 'Federico',
        apellido: 'Garcia',
        edad: 12 ,
    },
    {
        nombre: 'Alicia',
        apellido: 'Lopez',
        edad: 65 ,
    },
    {
        nombre: 'Tamara',
        apellido: 'Olivo',
        edad:15 ,
    },
    {
        nombre: 'Renato',
        apellido: 'Navarro',
        edad: 18,
    },
    {
        nombre: 'Laura',
        apellido: 'Fuentes',
        edad: 45 ,
    },
    {
        nombre: 'Vicente',
        apellido: 'Gonzales',
        edad: 20 ,
    },
    {
        nombre: 'Camila',
        apellido: 'Diaz',
        edad: 17 ,
    },
    {
        nombre: 'Julia Mensdoza',
        apellido: 'Mendoza',
        edad:36 ,
    },
    {
        nombre: 'Regina',
        apellido: 'Reyes',
        edad: 53 ,
    },
    {
        nombre: 'Jesica',
        apellido: 'Cruz',
        edad: 6 ,
    },
    {
        nombre: 'Carolina',
        apellido: 'Moreno',
        edad: 23 ,
    },
    {
        nombre: 'Camila',
        apellido: 'Soto',
        edad:25 ,
    }, {
        nombre: 'Daniel',
        apellido: 'Romero',
        edad: 23 ,
    },{
        nombre: 'Agustin',
        apellido: 'Vargas',
        edad: 16 ,
    },
    {
        nombre: 'Fernando',
        apellido: 'Herrera',
        edad: 61 ,
    },
    {
        nombre: 'Jose',
        apellido: 'Blanco',
        edad:9 ,
    },
    {
        nombre: 'Martin',
        apellido: 'Castro',
        edad: 47,
    },
    {
        nombre: 'Eduardo',
        apellido: 'Castillo',
        edad: 30 ,
    },
    {
        nombre: 'Juan',
        apellido: 'Vasquez',
        edad: 28 ,
    },
    {
        nombre: 'Alan',
        apellido: 'Serrano',
        edad: 13 ,
    },
    {
        nombre: 'Javiera',
        apellido: 'Salazar',
        edad: 74 ,
    },
    {
        nombre: 'Nadia',
        apellido: 'Contreras',
        edad: 52 ,
    },
    {
        nombre: 'Lidia',
        apellido: 'Rivera',
        edad:25 ,
    },
    {
        nombre: 'Angelica',
        apellido: 'Ruiz',
        edad:37 ,
    },
    {
        nombre: 'Jimena',
        apellido: 'Muñoz',
        edad:43 ,
    },
    {
        nombre: 'Tania',
        apellido: 'Garcia',
        edad:14 ,
    },
    {
        nombre: 'Denis',
        apellido: 'Rivera',
        edad:11 ,
    },
    {
        nombre: 'Yanina',
        apellido: 'Castillo',
        edad:28 ,
    },
    {
        nombre: 'Amelia',
        apellido: 'Flores',
        edad:44 ,
    },
    {
        nombre: 'Pamela',
        apellido: 'Moreno',
        edad:20 ,
    },
    {
        nombre: 'Veronica',
        apellido: 'Sanchez',
        edad:26 ,
    },
    {
        nombre: 'Sara',
        apellido: 'Iglesias',
        edad: 57 ,
    },
    {
        nombre: 'Josefa',
        apellido: 'Aguilar',
        edad:18 ,
    },
    {
        nombre: 'Macarena',
        apellido: 'Ortiz',
        edad:36 ,
    },
    {
        nombre: 'Roberto',
        apellido: 'Luna',
        edad:29 ,
    },
    {
        nombre: 'Sebastian',
        apellido: 'Dominguez',
        edad: 42 ,
    },
    {
        nombre: 'Mario',
        apellido: 'Muñoz',
        edad: 10 ,
    },
    {
        nombre: 'Silvio',
        apellido: 'Medina',
        edad:24 ,
    },
    {
        nombre: 'Alfonzo',
        apellido: 'Carrasco',
        edad:50 ,
    },
    {
        nombre: 'Edgardo',
        apellido: 'Lopez',
        edad:19 ,
    },
    {
        nombre: 'Camilo',
        apellido: 'Diaz',
        edad:17 ,
    },
    {
        nombre: 'Paulo',
        apellido: 'Ramos',
        edad:40 ,
    },
    {
        nombre: 'Ricardo',
        apellido: 'Medina',
        edad:22 ,
    },
    {
        nombre: 'Angel',
        apellido: 'Chavez',
        edad: 46,
    },
    {
        nombre: 'Edmundo',
        apellido: 'Navarro',
        edad:68 ,
    },
    {
        nombre: 'Fiona',
        apellido: 'Torres',
        edad:32 ,
    },
    {
        nombre: 'Amelinda',
        apellido: 'Garcia',
        edad:25 ,
    },


];

// console.log(arrUsuarios.length);
/**
 * Array de todos los nombres completos de los usuarios,
 * pero unicamente si estan en sus 20,
 * y si su nombre completo tiene nas o es igual10 caracteres
 */

const estaEnVeinte = usuario =>usuario.edad <=15 ;
const nombreCompleto = usuario => `${usuario.nombre} ${usuario.apellido}`;
const tiene10Caracteres =  nombreComp => nombreComp.length >= 10; 


// const requestUsers = arrUsuarios.filter(estaEnVeinte)
//                     .map(nombreCompleto)
//                     .filter(tiene10Caracteres);


// nombres completo
// const consulta = arrUsuarios.reduce((acc, elem, indice)=>{
//     const fullName = nombreCompleto(elem)
//     acc[indice] = {id: indice, nombrecompleto: fullName}
//     return acc;
// },{});
contador = 0;
const consulta = arrUsuarios.reduce((acc, elem, indice)=>{
    const fullName = nombreCompleto(elem);
    // acc[indice] = {id: indice, nombrecompleto: fullName, edad: elem.edad}
    if (estaEnVeinte(elem) && nombreCompleto(elem)) {
       
        acc[contador++] = {id: indice, nc: fullName, edad: elem.edad}

    }
    return acc;
},[]);

