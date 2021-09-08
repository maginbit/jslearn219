/**
 * ----  PLUCK -----
 */


 import { fromEvent, range } from 'rxjs';


 import { mapTo } from 'rxjs/operators';
 
 const keyUp$ =  fromEvent<KeyboardEvent>( document, 'keyup');
  
  

 const keyUpmapTo$ = keyUp$.pipe(
 
 /**
  *    permite regresar un valor unico cada vez 
  * que se utiliza
  */
 
 mapTo('soy mapTO')
 );
 
 keyUpmapTo$.subscribe(console.log);