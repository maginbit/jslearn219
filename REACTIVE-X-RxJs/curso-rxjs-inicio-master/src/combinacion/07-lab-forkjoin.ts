/**
 * 
 * FORKJOIN: los valores tienen que ser finitos. mostara los valores de los observables
 * solo cuendo todos se completen.
 *  
 */

 import { fromEvent, of,interval, concat, merge, combineLatest, forkJoin } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { take,delay, tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap, startWith, endWith } from 'rxjs/operators';
 
 const GITHUB_API_URL = 'https://api.github.com/users';
 const GITHUB_USER = 'klerith';

 forkJoin({
     usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
     respos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repo`)
                 .pipe(
                     catchError(err =>of([]))
                 ),
    gists: ajax.getJSON(
            `${ GITHUB_API_URL}/${ GITHUB_USER}/gists`
    )
 }).pipe(
     catchError(err => of(err))
 ).subscribe(console.log);