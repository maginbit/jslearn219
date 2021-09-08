/**
 * 
 * MERGE: se completa la subcripcion cuando los todos los observables terminan (desde rxjs)
 *  
 */

 import { fromEvent, of,interval, concat, merge } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { take,tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap, startWith, endWith } from 'rxjs/operators';
 
 
 const keyup$ = fromEvent(document, 'keyup');
 const click$ = fromEvent(document, 'click');
 
 
 const merge$ = merge( 
     keyup$.pipe( pluck('type')),
     click$.pipe(pluck('type'))
 )
 
 merge$.subscribe(console.log);