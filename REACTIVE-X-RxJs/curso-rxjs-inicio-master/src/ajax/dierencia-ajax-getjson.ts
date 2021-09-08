import { of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';


const url = 'https://httpbin.org/delsay/1';


const manejaError = ( resp: AjaxError)=>{
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

// const obs$ = ajax.getJSON(url, {
//     'Content-Type': 'application/json',
//     'mi-token': 'BVSD33209'
// });

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );


const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

// obs2$.subscribe( data => console.log('ajax', data));


const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next: ',val),
    error: err => console.warn('error en subs: ', err),
    complete: () => console.log('completado')

});