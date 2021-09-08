/**
 * 
 * FORKJOIN: los valores tienen que ser finitos. mostara los valores de los observables
 * solo cuendo todos se completen.
 *  
 */

 import { fromEvent, of,interval, concat, merge, combineLatest, forkJoin } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { take,delay, tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap, startWith, endWith } from 'rxjs/operators';
 
 
 const numeros$ = of(1,2,3,4,5,6,7,);
 const intervalos$ = interval(1000).pipe(take(3));
 const letras$ = of('a','b','b').pipe(delay(3000));


//  forkJoin(
//      numeros$,
//      intervalos$,
//      letras$
//  ).subscribe( console.log);

//  forkJoin(
//      numeros$,
//      intervalos$,
//      letras$
//  ).subscribe( resp => 
//     { 
//      console.log('numeros:', resp[0])
//      console.log('intervalos:', resp[1])
//      console.log('letras: ', resp[2]);
// });

// forkJoin({
//     num: numeros$,
//     int: intervalos$,
//     let: letras$
// }).subscribe( resp => {
//     console.log(resp);
// });