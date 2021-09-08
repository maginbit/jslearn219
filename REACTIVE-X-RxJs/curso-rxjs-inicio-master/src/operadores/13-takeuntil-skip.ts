/**
 *  takeUntil: Emite valores hasta que el segundo observable
 * emita su valor
 * take: permite saltar una condicion al momento de emitir valores.
 */

 import { fromEvent, interval } from "rxjs";
 import { skip, takeUntil, tap} from 'rxjs/operators';
 
 const boton = document.createElement('button');
 boton.innerHTML = 'Detener Timer';
 
 document.querySelector('body').append(boton);
 
 const contador$ = interval(1000);
 
 const clickBoton$ = fromEvent(boton,'click').pipe(
     tap(()=> console.log('tap antes del skip')),
     skip(1),
     tap(()=> console.log('tap despues del skip'))
 
 );
 
 contador$.pipe(
     takeUntil(clickBoton$)
 ).subscribe({
     next: val => console.log('next', val),
     complete: ()=> console.log('completado')
 });
 
 
 