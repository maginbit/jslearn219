import { fromEvent } from 'rxjs';


/**
 * Eventos del DOM
 */

const obs1$ = fromEvent<MouseEvent>( document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (val) => console.log('next :', val),
    err: (error) => console.log('error: ', error),
    comp: ()=> console.log('completado')
}

/**
 * destructurar
 */
obs1$.subscribe(({x,y}) =>{
    console.log(x,y);
})


// obs1$.subscribe( valor => {
//     console.log(valor);
//     console.log(valor.x)
// });


obs2$.subscribe( valor => console.log(valor.key));
