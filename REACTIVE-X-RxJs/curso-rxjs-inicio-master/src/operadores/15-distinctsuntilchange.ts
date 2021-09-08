/**
 * 
 * DISTINCTUNTILCHANGE: permite evaluar  valores contiguos  que esten repetidos y emite los que se repiten
 * 
 */

 import { distinct,from,of } from "rxjs";
 import { distinctUntilChanged, map } from 'rxjs/operators';
 
 
 interface Usuario{
     nombre: string;
 }
 
 const usuarios: Usuario[] = [
     {
         nombre: 'Anna'
     },
     {
         nombre: 'julia'
     },
     {
         nombre: 'Anna'
     },
     {
         nombre: 'Patricia'
     },
     {
         nombre: 'Anna'
     },
     {
         nombre: 'Valezca'
     },
     {
         nombre: 'Anna'
     },
     {
         nombre: 'Anna'
     },
     {
         nombre: 'Romina'
     },
 
 ];
 from(usuarios).pipe(
     distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre)
 ).subscribe(console.log)