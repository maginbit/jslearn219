import { Cliente } from './cliente.js';
export const nombreEmpresa = 'Capitan Gloton';
export let capital = 2000000;

export function infoEmpresa(nombre, ahorro){
    return `Empresa: ${nombreEmpresa} - Capital ${capital}`;
}

export function infoNombre(nombre){
    return `Nombre del Empresa : ${nombreEmpresa}`;
}

//extender una clase

export class Empresa extends Cliente{
        constructor(nombre, ahorro, categoria){
            super(nombre, ahorro);
            this.categoria = categoria;
        }
        mostrarInformacion(){
            return `ClienteExtends : ${this.nombre} - AhorroExt: ${this.ahorro} - Categoria:${this.categoria}}`;
        }
}