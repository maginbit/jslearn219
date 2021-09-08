/**
 * 
 * SAMPLETIME: permite tener una subcripcion que esta pendiente de cada una de sus emisiones
 * en periodos de tiempo
 * 
 */

 import { fromEvent, sampleTime } from "rxjs";
 import { map } from 'rxjs/operators';
 
 
 const click$ = fromEvent<MouseEvent>(document, 'click');
 
 click$.pipe(
     map(({x,y})=>({x,y})),
     sampleTime(5000)
 ).subscribe({
     next: val => console.log('next: ', val),
     complete: ()=>console.log('completado')
 });