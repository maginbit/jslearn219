/**
 * 
 * CONCATMAP () : Permite trabajar con varios observables, en el que sus valores
 * entraran a una fila para mostrarse
 */


 import { concatMap, take } from 'rxjs/operators';
 import { fromEvent, interval } from 'rxjs';
 
 
 const click$ = fromEvent(document, 'click');
 
 const interval$ = interval(500).pipe(take(3));
 
 
 click$.pipe(
     concatMap(()=>interval$)
 ).subscribe({
     next: val => console.log('next: ', val),
     complete: ()=> console.log('complete')
 })