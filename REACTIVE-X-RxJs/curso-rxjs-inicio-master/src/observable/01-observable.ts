import { interval, Observable, Observer } from "rxjs";

//creado un observador para el observable creado "obs$"

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subcriber) => {
  let num = 0;
  const interval = setInterval(() => {
    num++;
    subcriber.next(num);
  }, 1000);

  // complete
  setTimeout(() => {
    subcriber.complete();
  }, 2500);

  // dentener el intervalo
  return () => {
    clearInterval(interval);
    console.log("Intervalo detenido");
  };
});
const subcripcion_1 = intervalo$.subscribe(observer);
const subcripcion_2 = intervalo$.subscribe(observer);

// despues de 3 segundo de desescribe del observable
setTimeout(() => {
  subcripcion_1.unsubscribe();
  subcripcion_2.unsubscribe();
  console.log("Time-out complet");
}, 3000);
