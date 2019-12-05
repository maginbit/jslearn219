// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max -10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

//FUNCION 

function obtenerAutos(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

//datos de busqueda forma global
let datosBusqueda = {
        marca : '',
        year : '',
        minimo : '',
        maximo : '',
        puertas : '',
        transmision : '',
        color : ''
};

//EVENT LISTENER
//Marca
const marca = document.querySelector('#marca');
marca.addEventListener('input', e =>{
    console.log(`Marca: ${e.target.value}`);
    datosBusqueda.marca = e.target.value;
    //Funcion filtrar autos
    fitltarAutos();
});
//Year
const year = document.querySelector('#year');
year.addEventListener('input', e =>{
    console.log(`Year: ${e.target.value}`);
    datosBusqueda.year = Number(e.target.value);
    //Funcion filtrar autos
    fitltarAutos();
});
//Minimo
const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', e =>{
    console.log(`Minimo: ${e.target.value}`);
    datosBusqueda.minimo = Number(e.target.value);
    //Funcion filtrar autos
    fitltarAutos();
});
//Maximo
const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', e =>{
    console.log(`Maximo: ${e.target.value}`);
    datosBusqueda.maximo = Number(e.target.value);
    //Funcion filtrar autos
    fitltarAutos();
});
//Puertas
const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', e =>{
    console.log(`Puertas: ${e.target.value}`);
    datosBusqueda.puertas = Number(e.target.value);
    //Funcion filtrar autos
    fitltarAutos();
});
//Transmision
const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', e =>{
    console.log(`Transmision: ${e.target.value}`);
    datosBusqueda.transmision = e.target.value;
    //Funcion filtrar autos
    fitltarAutos();
});
//Color
const color = document.querySelector('#color');
color.addEventListener('input', e =>{
    console.log(`Color: ${e.target.value}`);
    datosBusqueda.color = e.target.value;
    //Funcion filtrar autos
    fitltarAutos();
});


const autos = obtenerAutos();

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

//Funcinon Limpiar
function limpiarHTML(){

  const contenedor = document.querySelector('#resultado');
   
 while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild);
}
}
//funcion mostrarAuto
function mostrarAutos(autos){
    limpiarHTML();
   
   //leer el elemento Resultado
   const contenedor = document.querySelector('#resultado');
   
    //Construir el HTML de los autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `<p>${auto.marca} - ${auto.modelo} - ${auto.year} - Puertas: ${auto.puertas}-Transmision: ${auto.transmision} - Precio: ${auto.precio} Color: ${auto.color}</p>`;
        contenedor.appendChild(autoHTML);
    });
    
}
//Mensaje de No Resultados
function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.appendChild(document.createTextNode('No Hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);

}

//F->Filtar Autos
function fitltarAutos(){
    //console.log('Desde Funcion Filtrar Autos');

    //Higherorderfunction : basicamente es una funcion que toma otra funcion como su argumento 
        const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarTransmision).filter(filtrarPuertas).filter(filtrarColor);
        console.log(resultado);
        if (resultado.length) {
            mostrarAutos(resultado);
        }else{
            noResultado();
        }
}

//filtro marca
function filtrarMarca(auto){
    
    //console.log(auto);
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto;
    }
}
//filtro year
function filtrarYear(auto){
    
    //console.log(auto);
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    }else{
        return auto;
    }
}
//filtro Minimo
function filtrarMinimo(auto){
    
    //console.log(auto);
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    }else{
        return auto;
    }
}
//filtro Maximo
function filtrarMaximo(auto){
    
    //console.log(auto);
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    }else{
        return auto;
    }
}
//filtro Transmision
function filtrarTransmision(auto){
    
    //console.log(auto);
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }else{
        return auto;
    }
}  

//filtro Puertas
function filtrarPuertas(auto){
    
    //console.log(auto);
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    }else{
        return auto;
    }
} 
//filtro Color
function filtrarColor(auto){
    
    //console.log(auto);
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }else{
        return auto;
    }
} 
