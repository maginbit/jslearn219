//eventBooks();
eventDelegation();
function eventBooks(){

  let book1 = document.querySelector('.book1');
  let book2 = document.querySelector('.book2');
  let book3 = document.querySelector('.book3');
  let book4 = document.querySelector('.book4');
  let book5 = document.querySelector('.book5');

  book1.addEventListener('click', function(){

      console.log(book1.innerText);
  });
  book2.addEventListener('click', function(){

      console.log(book2.innerText);
  });
  book3.addEventListener('click', function(){

      console.log(book3.innerText);
  });
  book4.addEventListener('click', function(){

      console.log(book4.innerText);
  });
  book5.addEventListener('click', function(){

      console.log(book5.innerText);
  });
}

//EVENT DELEGATION


function eventDelegation(){

  const book = document.querySelector('.books');

  book.addEventListener('click',function(e){
      if (e.target.classList.contains('bok')) {
        if (e.target.matches('a.book3')) {
               console.log(`Libro ganador : ${e.target.innerText}`);
        }else{
          console.log(e.target.innerText);
        }
      }
  });
}