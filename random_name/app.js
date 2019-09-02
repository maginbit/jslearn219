let x = 0;

(function userRandom(){
  let html = '';
  setTimeout(() => {
    const usersNames = 'https://www.randomuser.me/api';

    fetch(usersNames)
        .then(respuesta => respuesta.json())
        .then(data => {
             
          console.log(data.results[0].name.first);
             const name = `${data.results[0].name.first}`;
             const picture = `${data.results[0].picture.large}`;
          html += `
             
             <tr><td><img src="${picture}" class="img-fluid" width="200px"></td></tr>
             <tr><td>${name}</td></tr>
             `;
        let tag = document.querySelector('#app').innerHTML = html;
         $(document).ready(function(){
           $("#app").fadeOut();
        });
        })
        .catch(error =>  
            console.log(error)
          );
     userRandom();     
    
  }, 2000);
})();

  
  
 
  
  


/*
(() => {
  
      const usersNames = 'https://www.randomuser.me/api';

      fetch(usersNames)
          .then(respuesta => respuesta.json())
          .then(data => {


          })
          .catch(error => 
              console.log(error);
            );

    
    })();
*/