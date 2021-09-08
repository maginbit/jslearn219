import { fromEvent, of,interval, concat, merge, combineLatest, forkJoin, from } from "rxjs";
import { ajax } from "rxjs/ajax";
import { take,delay, tap, mergeMap, map, pluck, catchError, reduce,switchMap, exhaustMap, startWith, endWith, filter } from 'rxjs/operators';


/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

 (() =>{


    const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
  
    from(datos).pipe(
      // Trabajar aquí
      filter<any>(
        dato => !isNaN(dato)
      ),
      reduce((acc, el) => {
          return acc + el
      }, 0)
  
  
    ).subscribe( console.log ) // La salida debe de ser 32
  
  
  
  })();
  
  