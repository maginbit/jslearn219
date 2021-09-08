/**
 * 
 * STARTWITH: comenzar con el argumento que uno le envie, antes de enviar el flujo de datos.
 * ENDWITH: termina con el argumento que uno defina 
 */

 import { fromEvent, of } from "rxjs";
 import { ajax } from "rxjs/ajax";
 import { tap, mergeMap, map, pluck, catchError, switchMap, exhaustMap, startWith, endWith } from 'rxjs/operators';
 
 
 const loadingDiv = document.createElement('div');
 loadingDiv.classList.add('loading');
 loadingDiv.innerHTML ='Cargando...';
 
 const body = document.querySelector('body');
 const url = 'https://reqres.in/api/users/2?delay=3';
 ajax.getJSON(url)
         .pipe(
             startWith(true)
         )
         .subscribe( resp => {
 
             if (resp === true) {
                 body.append(loadingDiv)
             }else{
                 document.querySelector('.loading').remove();
             }
             console.log(resp);
         })