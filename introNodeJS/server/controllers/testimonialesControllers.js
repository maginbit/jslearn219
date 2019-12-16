//modelo testimoniales
const Testimonial = require('../models/Testimoniales');


exports.infoTestimoniales = async (req, res) =>{
    
    
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
       const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    }else{
        //almacenar en la BD
        testimoniales = await Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        res.redirect('/testimoniales');
    }
}

exports.vistaTestimonios = async(req, res)=>{
        
    const testimoniales =  await Testimonial.findAll()
    res.render('testimoniales',{
        pagina: 'Testimoniales',
        testimoniales
    });
}