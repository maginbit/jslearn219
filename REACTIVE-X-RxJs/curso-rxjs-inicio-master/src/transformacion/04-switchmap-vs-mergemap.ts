/**
 * SWITCHMAP() : solo mantinen una subcripcion interna activa
 * MERGEMAP() : mantiene todas las subcripciones que uno necesite.
 * 
 */

import { fromEvent, interval} from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";


const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);


// click$.pipe(
//     switchMap(()=> interval$)
// ).subscribe(console.log);



click$.pipe(
mergeMap(()=> interval$)
).subscribe(console.log);