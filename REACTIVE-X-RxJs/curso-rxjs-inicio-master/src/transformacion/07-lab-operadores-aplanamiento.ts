/**
 * 
 * 
 * 
 */

 import { fromEvent, of } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
 
 
 
 // helpers
 const petecionHttp = (userPass) =>{
     https://reqres.in/
     return ajax.post('https://reqres.in/api/login?delay=1', userPass)
                 .pipe(
                     pluck('response', 'token'),
                     catchError(err => of('datos invalidos'))
                 )
 }
 
 // formulario
 
 const form = document.createElement('form');
 const inputEmail = document.createElement('input');
 const inputPass = document.createElement('input');
 const submitBtn = document.createElement('button');
 
 // configuraciones
 
 inputEmail.type = 'email';
 inputEmail.placeholder = 'Email';
 inputEmail.value = 'eve.holt@reqres.in'
 
 inputPass.type = 'password';
 inputPass.placeholder = 'Password';
 inputPass.value = 'cityslicka'
 
 submitBtn.innerHTML = 'ingresar'
 
 form.append(inputEmail, inputPass, submitBtn);
 document.querySelector('body').append(form);
 
 // prevenir refresh de la pagina 
 
 
 
 
 const submitForm$ = fromEvent<Event>( form, 'submit' )
                         .pipe(
                             tap(ev=> ev.preventDefault()),
                             map(ev => ({
                                 email: ev.target[0].value,
                                 password: ev.target[1].value
                             })),
                             // mergeMap( petecionHttp)
                             // switchMap( petecionHttp)
                             // exhaustMap( petecionHttp)
                         );
 
 submitForm$.subscribe(token => {
     console.log(token);
 });                       