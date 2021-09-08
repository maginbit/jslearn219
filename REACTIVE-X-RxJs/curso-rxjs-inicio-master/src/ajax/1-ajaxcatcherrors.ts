import {ajax, AjaxError} from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';
import { of } from 'rxjs';


const url = 'https://api.github.com/users?per_page=5';

const menejaErrores = (response: Response ) =>{
    if (!response.ok) {
        throw new Error( response.statusText)
    }
}

const atrapaError = (err: AjaxError)=>{
    console.warn('error en:', err);
    return of([]);
}
const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .then(err => console.warn('error en usuarios', err))


// fetchPromesa
//     .then(menejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .then(err => console.warn('error en usuarios', err))



ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
).subscribe({
    next: users => console.log('next: ', users),
    complete: ()=>console.log('completado')
});
