/**
 * ---- TAP ----
 * Permite visulizar valores en las llamadas
 */

 import { range } from "rxjs";

 import {tap, map } from 'rxjs/operators';
 
 
 const numeros$ = range(1,5);
 
 numeros$.pipe(
    // se pueden utilizar tanto tap como uno estime conveniente 
     tap( x=> console.log('antes : ', x)),
     map( val => val * 10 ),
     tap({
         next: valor => console.log('despues: ', valor),
         complete: ()=> console.log('completado')
     })
 ).subscribe( sub => console.log('subs', sub));