//modelo viaje
const Viaje = require('../models/viajes');
//modelo testimoniales
const Testimonial = require('../models/Testimoniales');


exports.consultasHomePage = (req, res)=>{
    const promise = [];

    promise.push(
        Viaje.findAll({
            limit: 3
        }))
    promise.push(
        Testimonial.findAll({
            limit: 3
        }))
        //pasar el promise y ejecutarlo
        const resultado = Promise.all(promise);

         resultado.then(resultado => res.render('index',{

             pagina: 'Proximos Viajes',
             clase: 'home',
             viajes : resultado[0],
             testimoniales : resultado[1]
         }))
         .catch(error => console.log(error));
}