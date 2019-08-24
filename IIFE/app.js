//IIFE(imediately invoked funtion expression)

//funcion normal

function sumar01(a, b){
    let sum;

    sum = a + b;

    return console.log(`La suma es : ${sum}`);
}

sumar01(20,40);

//IIFE  

(function sumar02(a,b){
  let sum;
  sum = a + b;
   console.log(`${sum}`);
})(40,100);

//IIFE ARROW FUNCTION

((a,b) => {
  let sum;
  sum = a + b;
  console.log(`${sum}`);
})(30,70);