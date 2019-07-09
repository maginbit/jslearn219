const prod1 = 'Pizza',
	  prec1 = 2500,
	  prod2 = 'Cazuela',
	  prec2 = 1600;


let html;

//forma antigua

html = '<ul>' +
		'<li>Orden: '+ prod1 +'</li>' +
		'<li>Precio: '+ prec1 +'</li>' +
		'<li>Orden: '+ prod2 +'</li>' +
		'<li>Precio: '+ prec2 +'</li>' +
		'</ul>';

		
document.getElementById('app').innerHTML = html;

//forma nueva
console.log('..........................')
html = `

		<ul>
		<li>Orden: ${prod1}</li>
		<li>Precio: ${prec1}</li>
		<li>Orden: ${prod2}</li>
		<li><u>Precio: ${prec2}</u></li>
		<li>$ Total: ${total(prec1,prec2)}</li>
		</ul>



		`;
function total(a,b){
  return a+b;
}		

document.getElementById('app').innerHTML = html;