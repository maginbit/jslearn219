import { of, from } from 'rxjs';


/**
 * of = toma argumentos y genera una secuencia 
 * from = array, promise, iterablem , observable
 * 
 */


const observer = {
    next: (val) => console.log('next: ',val),
    err: (error) => console.log('error:', error),
    complete: () => console.log('completado')
}

// const source$ = from ([1,2,3,4,5,6,7,8,9]);
// const source$ = of (...[1,2,3,4,5,6,7,8,9]);
// const source$ = from ('Hola mundo');
//   const source$ = of ('Hola mundo');

const source$ = from( fetch('https://api.github.com/users/klerith'));
// const source$ = of( fetch('https://api.github.com/users/klerith'));



// source$.subscribe(observer);

// source$.subscribe( resp=>{
//     console.log(resp);
// })

// source$.subscribe( async (resp)=>{


//     const data = await resp.json();
//     console.log(data);
// });


const miGenerador = function*(){

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

const miIterable = miGenerador();

// for( let id of miIterable){
//     console.log(id);
// }


from(miIterable).subscribe(observer);