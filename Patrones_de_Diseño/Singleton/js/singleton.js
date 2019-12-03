const alumnos = {
    //arreglo alumnos
    listaAlumnos : [],
    //obtener Alumnos
    get: function(id){
        console.log(id);
        return this.listaAlumnos[id];
    },
    //crear alumno
    crear: function(datos){
        //console.log(datos);
        this.listaAlumnos.push(datos);
    },
    //Lista de todos los alumnos
    listado: function(){
        return this.listaAlumnos;
    }
}

const infoAlumno1 = {
    nombre: 'Jose',
    edad:30
}
const infoAlumno2 = {
    nombre: 'Anna',
    edad:42
}
const infoAlumno3 = {
    nombre: 'Daniela',
    edad:23
}
const infoAlumno4 = {
    nombre: 'Tomas',
    edad:26
}
//crear
alumnos.crear(infoAlumno1);
alumnos.crear(infoAlumno2);
alumnos.crear(infoAlumno3);
alumnos.crear(infoAlumno4);

const listado = alumnos.listado();
console.log(listado);
const alumno = alumnos.get(1);
console.log(alumno);

alumnos.listaAlumnos.forEach((elemento,index) => {
            console.log(`Posicion: ${index}, Nombre: ${elemento.nombre}, Edad: ${elemento.edad} `);
    });