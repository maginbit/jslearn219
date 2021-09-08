/**
 * 
 * FORKJOIN: los valores tienen que ser finitos. mostara los valores de los observables
 * solo cuendo todos se completen.
 *  
 */

 import { fromEvent, of,interval, concat, merge, combineLatest, forkJoin } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { take,tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap, startWith, endWith } from 'rxjs/operators';
 
 
 const input1 = document.createElement('input');
 const input2 = document.createElement('input');
 
 input1.placeholder = 'email@mail.com';
 input2.placeholder= '************';
 input2.type = 'password';
 
 document.querySelector('body').append(input1, input2);
 
 // helpers
 
 const getInputStream = (elem: HTMLElement)=> 
             fromEvent<KeyboardEvent>( elem, 'keyup')
             .pipe(
                 pluck('target','value')
             );
 
 combineLatest(
     getInputStream(input1),
     getInputStream(input2)
 ).subscribe( console.log);

 forkJoin()