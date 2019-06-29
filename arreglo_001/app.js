
let numero = prompt('Cuantos productos desea ingresar');

let frutas = [];
let autos = {
      marca:'',
      modelo:''
};
let fruta = '';

numero = Number(numero);
console.log(typeof autos);
console.log(numero);
console.log(isNaN(numero));
console.log('-----------');
console.log(Object.keys(autos).length);
while (isNaN(numero)) {
  numero = prompt('Debe ingresar numero, Cuantos productos desea ingresar');

}


if (numero > 10) {
  while (numero >10) {
  numero = prompt('Debe ingresar un max de 10 frutas');

}
}

if (!isNaN(numero)) {
    console.log('ES UN NUMERO');

}else {
    console.log('NO ES UN NUMERO');  
}


/*
if (typeof numero == 'number') {
   console.log('es un numero '+true);
}else {
  console.log('No es un numero '+false);
}
*/
let data1 = '',
    data2 = '';
let datos = ['marca','modelo'];
let losAutos = [];
for (var j = 0,k=1; j < numero; j++) {
  
  //fruta = prompt('Nombre de Fruta '+x++);
        for (var i = 0; i < Object.keys(autos).length; i++) {
            if (datos[i] == 'marca') {
                  data1 = prompt('Ingrese '+datos[i]+' del auto numero :'+k);

                
            }else if (datos[i] == 'modelo') {
             data2 = prompt('Ingrese '+datos[i]+' del auto numero :'+k);

                
            }
          
        }
        
        losAutos.push({marca:data1, modelo:data2});
         
        k++;
       




  //frutas.push(fruta);

}

console.log(losAutos);
let html = '';
for (var i = 0; i < losAutos.length; i++) {
  
  html += '<ul>'+
          ' <li>marca: '+losAutos[i].marca+'  | modelo: '+losAutos[i].modelo+'</li>'+
          '</ul>';
}
document.getElementById('app').innerHTML = html;