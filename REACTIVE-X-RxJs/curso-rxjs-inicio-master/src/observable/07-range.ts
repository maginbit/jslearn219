/**
 * ---- RANGE ---- 
 * range(start: number, count: number, scheduler: Scheduler): Observable
 * 
 * tambien se puede trabajar de manera asincrona 
 */
 import { asyncScheduler, range } from 'rxjs';

 const obs$ = range(1,10, asyncScheduler);
 
 
 
 console.log('inicio');
 obs$.subscribe(valor => {
     console.log('next: ',valor);
 });
 console.log('fin');
 
 