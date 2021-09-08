import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';


const keyUp$ =  fromEvent<KeyboardEvent>( document, 'keyup');
 
 const encadeno$ = keyUp$.pipe(
// se pueden tener tantos operadores en cadena como uno quiera
    map( event => event.code),
    filter( key => key === 'Enter')
);

encadeno$.subscribe( val => {
    console.log(val);
});