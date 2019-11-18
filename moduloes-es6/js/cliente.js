//simpre que se exporte algo se utiliza la palabra export
export const nombreCliente = 'Juan';
export let ahorro = 200000;

export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

export function mostrarNombre(nombre){
    return `Nombre del Cliente : ${nombre}`;
}

//IMPORTAR CLASE

export class Cliente{

    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;

    }
    mostrarInformacion(){
        return `Cliente; ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}