import { fromEvent, timer, of,interval, concat, merge, combineLatest, forkJoin, from, Subject, pipe, zip } from "rxjs";
import { ajax } from "rxjs/ajax";
import { take,delay, tap, mergeMap, map,pluck, concatMap, catchError, reduce,switchMap, exhaustMap, startWith, endWith, filter } from 'rxjs/operators';


/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   Luke Skywalker, llamando el endpoint:   /people/1/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar la especie (species),
 *  que es un arreglo de URLs (array), dentro de ese arreglo, 
 *  tomar la primera posición y realizar la llamada a ese URL,
 *  el cual debería de traer información sobre su especie (Human)
 */

// Respuesta esperada:
// Información sobre los humanos en el universo de Star Wars
// Ejemplo de la data esperada
/*
 { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    especie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
    personaje: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/

(() =>{
    const SW_API = 'http://swapi.py4e.com/api';
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
     
    const luke$ = getRequest(SW_API + '/people/5');
    const human$ = luke$.pipe(
        pluck( 'species' ),
        concatMap( getRequest )
    )
     
    zip(luke$, human$).pipe(
        map(([personaje, especie]) => ({personaje, especie}))
    ).subscribe( console.log )
})();

		