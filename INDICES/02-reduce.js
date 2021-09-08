const nombres = [

    'Jorge','Maria','Jose','Maria','Tania','Alan','Jose',
    'Alan','Pedro','Renata','Maria','Pedro','Fernanda',
    'Jose', 'Tania','Alan','Jorge','Jose'
];

x = 0;
const cantidadNombres = nombres.reduce((contadorNombre, nombre)=>{

            contadorNombre[nombre] = (contadorNombre[nombre] || 0 ) + 1;
            console.log(contadorNombre);
            return contadorNombre;

},{});

console.log(cantidadNombres);