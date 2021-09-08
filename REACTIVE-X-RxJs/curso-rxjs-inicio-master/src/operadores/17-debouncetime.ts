/**
 * 
 *  DEBOUNCETIME: Es utilizado en los input del usuario al momento de retrasar una busqueda.
 *  Este tipo de observables son utilizados para controlar
 *  la informacion cuando se emite de manera muy frecuente
 *  
 */

 import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";

 const input = document.createElement('input');
 document.querySelector('body').append(input);
 
 const input$ = fromEvent(input, 'keyup');
 
 input$.pipe(
     debounceTime(1000),
     pluck('target', 'value'),
     distinctUntilChanged()
 ).subscribe({
     next: val => console.log('next: ', val),
     complete: ()=>console.log('completado')
 });