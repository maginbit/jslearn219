import { from, interval } from 'rxjs';
import { map, take, reduce, tap, scan } from 'rxjs/operators';

const numeros = [1,2,3,4,5,6];
const totalAcumulador = (ac: number, va: number) =>{

    return ac + va;
}

// Reduce emite un valor final
from(numeros).pipe(
    reduce(totalAcumulador, 0)
).subscribe( valor => console.log('subs reduce: ', valor));

// Scan, envia un valor por cada eveluacion
from(numeros).pipe(
    scan(totalAcumulador, 0)
).subscribe( valor => console.log('subs: ', valor));

//  modelo REDUX
interface Usuario{

    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const usuario: Usuario[] = [
{id: 'Anna', autenticado: false, token: null},
{id: 'Anna', autenticado: true, token: 'ABC'},
{id: 'Anna', autenticado: false, token: null},
]

const state$ = from(usuario).pipe(
    scan((x,y)=>{
        return {...x,...y}
    }, {edad: 40})
);

const id$ = state$.pipe(
    map( (state:any) => state)
);

id$.subscribe(valor =>{
    console.log('subs id: ',valor);
})