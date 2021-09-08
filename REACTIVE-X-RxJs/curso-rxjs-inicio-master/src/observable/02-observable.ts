import { interval, Observable, Observer } from 'rxjs';

//creado un observador para el observable creado "obs$"

const observer : Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ',error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subcriber =>{
    let num = 0;
    const interval = setInterval( ()=>{
        subcriber.next(num++);
        
        
    }, 1000);
    // dentener el intervalo
    return() =>{
        clearInterval(interval);
        console.log('Intervalo detenido');
    }


});
const subcripcion_1 = intervalo$.subscribe( sub1 => {
    console.log(sub1);
});
const subcripcion_2 = intervalo$.subscribe( sub2 => {
    console.log(sub2);
});

// despues de 3 segundo de desescribe del observable
setTimeout(()=>{
    subcripcion_1.unsubscribe()
    subcripcion_2.unsubscribe();
    console.log('Time-out complet');

}, 3000);