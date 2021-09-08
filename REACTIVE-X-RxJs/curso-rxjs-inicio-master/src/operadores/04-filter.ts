import { from, range  } from 'rxjs';
import { filter } from 'rxjs/operators';


// interfaz
 interface Personaje {
     tipo: string,
     nombre: string
 }



const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
    {
        tipo: 'heroe',
        nombre: 'superman'
    },
    {
        tipo: 'villano',
        nombre: 'Tanos'
    },
    {
        tipo: 'heroe',
        nombre: 'deadpool'
    },
    {
        tipo: 'villano',
        nombre: 'Pinguino'
    },
    {
        tipo: 'villano',
        nombre: 'darkseid'
    },

];

const soloHoroes$ = from(personajes);


const  onlyHereo$ = soloHoroes$.pipe( filter( (valor:any) =>{
    // return valor.tipo === 'heroe'
    return valor.tipo !== 'heroe'
}));

onlyHereo$.subscribe(valor =>{
    console.log(valor);
});
