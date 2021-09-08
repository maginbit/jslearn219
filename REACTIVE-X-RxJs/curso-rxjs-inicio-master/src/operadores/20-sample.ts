/**
 * 
 * SAMPLE: emite valores bajo condicion de otro observable, el sample emitira valores y los mostrara
 * solo cunado el segundo observable actue. Toma una muestra.
 * 
 */

 import { fromEvent, interval } from "rxjs";
 import { sample } from 'rxjs/operators';
 
 const interval$ = interval(2000);
 
 const click$ = fromEvent(document, 'click');
 
 
 interval$.pipe(
     sample(click$)
 ).subscribe({
     next: val => console.log('next: ', val),
     complete: ()=>console.log('completado')
 });