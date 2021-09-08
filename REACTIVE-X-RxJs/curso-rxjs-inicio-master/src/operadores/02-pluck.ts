/**
 * ----  PLUCK -----
 */


 import { fromEvent, range } from 'rxjs';


 import { pluck } from 'rxjs/operators';
 
 const keyUp$ =  fromEvent<KeyboardEvent>( document, 'keyup');
  
  
 keyUp$.subscribe(console.log);
 const keyUpPluck$ = keyUp$.pipe(
 
 /**
  * el siguiente codigo no permite acceder a objetos dentro de objetos
  * target: {
  *      attributes:{
  *                    length: 0 
  *                 }
  * }
  */
 
 pluck('target', 'attributes', 'length')
 );
 
 keyUpPluck$.subscribe(console.log);