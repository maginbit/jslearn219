async function leerTodos(){
  //esperar la respuesta
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

  //Proceder cuando la respuesta este hecha
  const datos = await respuesta.json();

  return datos;
}

leerTodos()
        .then(usuarios => {
          usuarios.forEach(element => {
              console.count(element.id);
          });
        })
        .catch(error => console.log(error));