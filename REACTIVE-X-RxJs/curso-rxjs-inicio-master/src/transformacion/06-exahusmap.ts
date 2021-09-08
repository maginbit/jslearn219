/**
 * 
 * EXHAUSTMAP () : SOLO MANTINE UNA SUBCRIPCION ACTIVA ANTES DE PODER UNA NUEVA SUBCRIPCION PARA QUE EMITA LOS VALORES.
 * se puese utilizar ne casos donde el usuario presione muchas veces el boton como en los formularios
 * 
 */




 import { concatMap, exhaustMap, take } from 'rxjs/operators';
 import { fromEvent, interval } from 'rxjs';
 
 
 const click$ = fromEvent(document, 'click');
 
 const interval$ = interval(500).pipe(take(3));
 
 
 click$.pipe(
     exhaustMap(()=>interval$)
 ).subscribe({
     next: val => console.log('next: ', val),
     complete: ()=> console.log('complete')
 })