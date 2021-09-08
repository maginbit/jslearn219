/**
 * 
 * CONCAT
 *  
 */

 import { fromEvent, of,interval, concat } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { take,tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap, startWith, endWith } from 'rxjs/operators';
 
 
 const interval$ = interval(500);
 
 const concatenar$ = concat(
     interval$.pipe(take(2)),
     interval$.pipe(take(4)),
     of(2)
 )
 
 concatenar$.subscribe({
     next: val =>console.log('next: ', val),
     complete: ()=> console.log('complete')
 });
 
 