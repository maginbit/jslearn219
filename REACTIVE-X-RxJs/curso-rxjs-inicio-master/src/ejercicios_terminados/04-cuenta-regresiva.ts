import { fromEvent, of,interval, concat, merge, combineLatest, forkJoin, from, Subject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { take,delay, tap, mergeMap, map, pluck, catchError, reduce,switchMap, exhaustMap, startWith, endWith, filter } from 'rxjs/operators';


/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva

        map(i => inicio-i),
        take( inicio +1 )
    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();
