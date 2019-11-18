//archivo que recibe el export

import {nombreCliente,  mostrarInformacion, ahorro, mostrarNombre, Cliente } from './cliente.js';
import {nombreEmpresa, capital as capitalEmpresa, infoEmpresa, infoNombre, Empresa} from './empresa.js'
/*
permite importar todas la variables o funciones desde el archivo cliente
import * as cliente from './cliente.js'; 
console.log(cliente.ahorro);
console.log(cliente.mostrarInformacion(cliente.ahorro, cliente.nombreCliente));
*/

console.log(nombreCliente);
console.log(ahorro);

const info = mostrarInformacion(nombreCliente, ahorro);
console.log(info);

const name = mostrarNombre(nombreCliente);
console.log(name);

//exportar class Cliente

const cliente1 = new Cliente(nombreCliente, ahorro);
const cliente2 = new Cliente('Anna', 2300000);

console.log(`${cliente1.nombre}-${cliente1.ahorro}`);
console.log(cliente2);

//Import file empresa

const nEmpresa = infoNombre(nombreEmpresa);
console.log(nEmpresa);

const infoEmpr = infoEmpresa(nombreEmpresa, capitalEmpresa);
console.log(infoEmpr);

//Trabajando con extension de clases

const infoExtends = new Empresa(nombreCliente, ahorro,'Emprededor');

console.log(infoExtends.mostrarInformacion());