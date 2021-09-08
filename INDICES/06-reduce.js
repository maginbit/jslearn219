const usuarios = [
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
/**
 * Hola!. Esto es por el cómo está manejando el reductor. En la primera iteración tienes un objeto JSON vacío, entonces toma
 *  una copia el objeto y le agrega un nuevo atributo que es el el[el.nombre]: el. Hasta el momento tienes un objeto con un elemento. 
 * Ahora, toma una copia del objeto JSON y le agrega otro nuevo atributo y así sucesivamente.

En los dos ejemplos anteriores lo que hizo fue sumar los elementos que iteraba, pero este ejemplo.con el JSON, cómo comentó, está más ligado al mundo real.

Pero bueno, toma una copia del objeto porque no puede sumar un atributo al JSON (o al menos yo no sé que se puedo :S), Entonces si no toma la copia solo tendrías como resultado un JSON con el último atributo que se metió.

Espero no haberte confundido :)
 */
const indexed = usuarios.reduce((acc, el)=>({
    ...acc,
    [el.nombre]: el
}),[]);


console.log(indexed);

console.log(indexed['Anna']);
