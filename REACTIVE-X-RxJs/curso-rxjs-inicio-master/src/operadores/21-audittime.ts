/**
 * 
 * AUDITTIME : emite el utlimo valor del observable en un periodo de tiempo determinado.
 * 
 * el objetivo principal de los operadores de tiempo es control la el alto flujo de informacion
 * que se emite muy rapido
 * 
 */

 import { fromEvent } from "rxjs";
 import { auditTime, tap,map} from 'rxjs/operators';
 
 
  const click$ = fromEvent<MouseEvent>(document, 'click');
 
  click$.pipe(
      map(({x})=> x),
      tap(val =>console.log('tap', val)),
      auditTime(2000)
  ).subscribe({
      next: val => console.log('next: ', val),
      complete: ()=>console.log('completado')
  });