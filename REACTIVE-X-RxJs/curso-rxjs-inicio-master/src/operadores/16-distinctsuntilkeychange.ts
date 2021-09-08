/**
 * 
 * DISTINCTUNTILKEYCHANGE: permite evaluar  valores contiguos  que esten repetidos y emite los que se repiten
 * 
 */

 import { distinct,from,of } from "rxjs";
 import { distinctUntilChanged, distinctUntilKeyChanged, map } from 'rxjs/operators';
 
 
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
     distinctUntilKeyChanged('nombre')
 ).subscribe(console.log)