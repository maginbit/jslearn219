/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
 import { fromEvent, of,interval, concat, merge, combineLatest, forkJoin, from } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { take,delay, tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap, startWith, endWith } from 'rxjs/operators';
 
 (() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
  
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    // for( let nombre of nombres ) {
    //   console.log( capitalizar(nombre) )
    // }
  
  from( nombres).pipe(
      map(nombre => capitalizar(nombre))
  ).subscribe(console.log)
  
  
})();


  
  
  
  