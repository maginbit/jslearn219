/**
 *  TAKE : limita la cantidad de emisiones 
 */

 import { of } from 'rxjs';
 import { take, tap } from 'rxjs/operators';
 
 const numeros$ = of(1,2,3,4,5,6,7,8,9,10);
 
 
 numeros$.pipe(
     tap(t => console.log('tap', t)),
     take(5)
 )
    .subscribe({
     next: val => console.log('next: ', val),
     complete: () => console.log('completado')
 });