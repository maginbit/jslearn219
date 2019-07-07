let x = 'Aprendiendo';
    z = 'JavaScript';
     //concatenar variables manera antigua
     console.log(x+z);
    //concatenar variables manera nueva
    console.log(`${x} ${z}`);
    //concatenar con metodo

    console.log(x.concat(' JavaScript 2019'));

let frase = 'El arbol antiguo, se, en, cae en el risco';
//contar largo de la palabra
console.log(frase.length);

//mayusculas

console.log(frase.toUpperCase());

//minuscula

console.log(frase.toLowerCase());

//posicion 
 console.log(frase.indexOf('arbol'));//si no encuentra la palabra regresa menos uno


//substring - 

console.log(frase.substring(2,11));

//buscar
console.log(frase.search('se'));

//separar
console.log(frase.slice(0,5));

console.log(frase.split(' '));


let f = frase.split(' ');


for (var i = 0; i < f.length; i++) {
  
      //console.log(f[i]);
}


//remplaza
console.log(frase.replace(',','--'));

//incluye devulve true o false

console.log(frase.includes('rwr')); 

//repetir

console.log(frase.repeat(3));















