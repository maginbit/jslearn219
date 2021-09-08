/**
 * 
 *  THROTTLETIME: parecido al debouncetime, primero emite el valor y espera el tiempo
 * defino y luego emite el siguiente valor, este tipo de observables son utilizados para controlar
 *  la informacion cuando se emite de manera muy frecuente
 */


 import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";

// EJEMPLO 1
const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(2000)

).subscribe({
    next: val => console.log('next: ', val),
    complete: ()=>console.log('completado')
});


//  EJEMPLO 2
 const input = document.createElement('input');
 document.querySelector('body').append(input);
 
 const input$ = fromEvent(input, 'keyup');
 
 input$.pipe(
     throttleTime(1000, asyncScheduler,{
         leading:true,
         trailing: true
     }),
     pluck('target', 'value'),
     distinctUntilChanged()
 ).subscribe({
     next: val => console.log('next: ', val),
     complete: ()=>console.log('completado')
 });
