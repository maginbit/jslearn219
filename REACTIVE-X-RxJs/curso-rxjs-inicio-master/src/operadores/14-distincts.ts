/**
 * 
 * DISTINCT: permite evaluar valores que esten repetidos y emite los que se repiten
 * 
 */

 import { distinct,from,of } from "rxjs";
 import { map } from 'rxjs/operators';
 
 
 // const numeros$ = of<number|string>(1,'1',2,1,1,3,4,5,6,2,2,2,1,1,'1','1');
 // numeros$.pipe(
 //     distinct() // ===
 
 // ).subscribe( console.log );
 
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
         nombre: 'Romina'
     },
 
 ];
 from(usuarios).pipe(
     distinct(data => data.nombre)
 ).subscribe(console.log)