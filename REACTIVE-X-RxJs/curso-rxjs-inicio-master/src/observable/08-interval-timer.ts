/**
 * --- interval, timer ---
 * signature: interval(period: number, scheduler: Scheduler): Observable
 *  
 * timer = timer(initialDelay: number | Date, period: number, scheduler: Scheduler): Observable
 * 
 *Intervaly Timer es un observable asincrono por naturaleza.
 */
 import { interval, timer } from 'rxjs';



 const observer = {
 
     next: (val) => console.log('next: ', val),
     err: (error)=> console.log('error: ', error),
     complete: ()=>console.log('completo')
 }
 
 const fechaDeHoyMas5 = new Date();
 fechaDeHoyMas5.setSeconds( fechaDeHoyMas5.getSeconds() + 5);
 
 
 // siempre comienza en zero 0
 const interval$ = interval(1000);
 
 /**
  * el timer con los argumentos ingresados
  * quiere decir que luego de 2segundos comenzara
  * un intervalo de 1segundo cada intervalo.
     const timer$ = timer(2000,1000);
  */
 
 /** 
  * el siguiente codigo utiliza la clase Date 
  *  a la que se le suma 5 segundo a la fecha actual
  * y se le pasa como argumento al metodo timer,
  * este comenzara despues de los 5 segundos tomando la
  * hora actual.
  * const timer$ = timer(fechaDeHoyMas5);
 */
 
 const timer$ = timer(3000, 500);
 console.log('Inicio');
 
 // interval$.subscribe( observer );
 timer$.subscribe( observer );
 
 console.log('Fin');