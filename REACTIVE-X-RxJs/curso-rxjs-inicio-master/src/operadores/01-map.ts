/**
 * ---- MAP -----
 */


 import { fromEvent, range } from 'rxjs';


 import { map } from 'rxjs/operators';
 
 // range(1,5).pipe(
 //     map<number, number>( val => val * 10 )
 // ).subscribe( console.log);
 
 
 const keyUp$ =  fromEvent<KeyboardEvent>( document, 'keyup');
 
 
 // keyUp$.subscribe(val => console.log(val));
 
 const keyUpCode$ = keyUp$.pipe(
     map(
         event => {
           return  event.code
         }
     )
 );
 
 keyUpCode$.subscribe( val => {
     console.log(val);
 });
 