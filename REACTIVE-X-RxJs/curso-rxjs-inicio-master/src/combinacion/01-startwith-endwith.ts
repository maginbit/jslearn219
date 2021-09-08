/**
 * 
 * STARTWITH: comenzar con el argumento que uno le envie, antes de enviar el flujo de datos.
 * ENDWITH: termina con el argumento que uno defina 
 */

 import { fromEvent, of } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap, startWith, endWith } from 'rxjs/operators';
 
 
 const numeros$ = of(1,3,4,5,6,7).pipe(
     startWith('a','b','c'),
     endWith('x','y','z')
 );
 
 numeros$.subscribe( console.log)