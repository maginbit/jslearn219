//modelo testimoniales
const Testimonial = require('../models/Testimoniales');


exports.infoTestimoniales = (req, res) =>{
    //validar que todos los campos esten llenos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre){
        errores.push({'mensaje' : 'Agrega tu Nombre'});
    }
    if(!correo){
        errores.push({'mensaje' : 'Agrega tu Correo'});
    }
    if(!mensaje){
        errores.push({'mensaje' : 'Agrega tu Mensaje'});
    }
    //revisar errorres
    if (errores.length > 0) {
        //muestra la vista con errores
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    }else{
        //almacenar en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(testimoniales => res.redirect('/testimoniales'))
           .catch(error => console.log(error));
    }
}

exports.vistaTestimonios = (req, res)=>{
        
    Testimonial.findAll()
         .then(testimoniales => res.render('testimoniales',{
             pagina: 'Testimoniales',
             testimoniales
         }))
}