/**
 *  FIRST: trabaja bajo un condicional de recorrido, si llega a cumplirse la
 *  condicion definida el proceso cumplira la condicion y este  termina. 
 */

 import { fromEvent } from "rxjs";
 import { tap, take, first,map } from 'rxjs/operators';
 
 
 const click1$= fromEvent<MouseEvent>(document, 'click');
 const click2$= fromEvent<MouseEvent>(document, 'click');
 
 
 click1$.pipe(
     tap(()=>console.log('tap')),
     first<MouseEvent>(event => event.clientY >= 140 )
 ).subscribe({
     next: val => console.log('next: ',val),
     complete : ()=> console.log('completado')
 });
 
 
 // Destructurando
 click2$.pipe(
     tap<MouseEvent>(()=>console.log('tap')),
     // map( event => 
     // // crea un objeto con los datos especificos
     // ({
     //     clientY: event.clientY,
     //     clientX: event.clientX
 
     // }))
  map(({clientY, clientX})=> ({clientY, clientX})),
  first(event => event.clientY >= 150)
 ).subscribe({
     next: val => console.log('next: ',val),
     complete : ()=> console.log('completado')
 });
 
 