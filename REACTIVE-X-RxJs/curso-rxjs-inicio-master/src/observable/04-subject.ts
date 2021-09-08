import { interval, Observable, Observer, Subject } from "rxjs";

//creado un observador para el observable creado "obs$"

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalosRandom$ = new Observable<number>( subs=>{

    const intervalID = setInterval(
        ()=> subs.next(Math.random()), 1000
    );

    return () =>{
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});





/**
 * Caracteristicas de un subject$
 * 1.- Casteo Multiple, permite enviar la misma informacion al los que esten
 * suscriptos a este observable.
 * 2.- Tambien es un observer
 * 3.-Next, erro y complete
 * 4.-permite agregar informacion al flujo del observable
 */



// crear un Subject

const subjects$ = new Subject();
const intervalSubject = intervalosRandom$.subscribe(subjects$);


const subs_1 = subjects$.subscribe( observer);
const subs_2 = subjects$.subscribe(observer);

setTimeout(()=>{
    // agregar informacion al flujo del observable
    subjects$.next(10);
    subjects$.complete();
    intervalSubject.unsubscribe();

},3500);