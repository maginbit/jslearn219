/**--- OF observable sincrono --- */

import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6,7);
// const obs$ = of([1,2,3,4,5]);
// const obs$ = of(...[1,2,3,4,5,],6,7,8,9,);
const obs$ = of([45,3,23,3,6], true, {nombre: 'Anna'}, function(){}, Promise.resolve(true));

obs$.subscribe({
    next: (value) => { console.log('next', value) },
    error: () => { null },
    complete: () => console.log('terminamos la secuencia')
});

