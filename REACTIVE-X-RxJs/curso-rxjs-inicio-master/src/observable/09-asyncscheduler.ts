
/**
 * 
 * ----- asyncScheduler ----
 * 
 * 
 * 
 */


 import { async, asyncScheduler } from 'rxjs';

 const hello_1 = ()=> console.log('hello world');
 const hello_2 = (nombre)=> console.log(` Hola ${nombre}`);
 
 
 // asyncScheduler.schedule(hello_1,2000);
 // asyncScheduler.schedule( hello_2, 4000, 'Anna')
 
 
 
 
 
 console.log('inicio');
 // funcion recursiva, una manera de trabajar con asyncScheduler
 const subs = asyncScheduler.schedule( function(state){
 
     console.log('state: ', state);
     this.schedule(state+1, 1000);
 
 }, 3000, 0);
 
 console.log('fin');
 
 //  terminar subcripcion 
 
 // forma
 // setTimeout(()=>{
 //     subs.unsubscribe();
 
 // }, 6000);
 
 // 2 forma
 
 asyncScheduler.schedule( () => subs.unsubscribe(), 6000);
 