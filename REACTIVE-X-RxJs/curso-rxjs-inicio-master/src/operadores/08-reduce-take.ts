import { interval } from 'rxjs';
import { map, take, reduce, tap } from 'rxjs/operators';


const numeros = [1,2,3,4,5,6];
const totalReducer = (ac: number, va: number) =>{

    return ac + va;
}

const total = numeros.reduce( totalReducer, 0);
console.log(total);

interval(1000).pipe(
    take(5),
    tap(tap => console.log('tap: ', tap)),
    reduce( totalReducer)

).subscribe( valor =>{
    console.log('subs: ', valor);
});
