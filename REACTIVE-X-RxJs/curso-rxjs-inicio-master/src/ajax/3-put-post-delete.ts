
import {ajax} from 'rxjs/ajax';




const url = 'https://httpbin.org/delay/1';


// ajax.put(url, {
//     id: 1,
//     nombre:'Anastasia'
// },{
//     'mi-token': 'SSDPCE44351'
// });

// ajax.post(url, {
//     id: 1,
//     nombre:'Anastasia'
// },{
//     'mi-token': 'SSDPCE44351'
// }).subscribe(console.log);

// ajax({
//     url: url,
//     method: 'PUT',
//     headers: {
//         'mi-token':'AVDF5002'
//     }
// }).subscribe({
//     next: val => console.log('next: ',val),
//     error: err => console.warn('error en subs: ', err),
//     complete: () => console.log('completado')

// });

ajax({
    url: url,
    method: 'DELETE',
    headers: {
        'mi-token':'AVDF5002'
    }
}).subscribe({
    next: val => console.log('next: ',val),
    error: err => console.warn('error en subs: ', err),
    complete: () => console.log('completado')

});