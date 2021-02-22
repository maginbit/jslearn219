//modelo viaje
const Viaje = require('../models/viajes');
//modelo testimoniales
const Testimonial = require('../models/Testimoniales');


exports.consultasHomePage = async (req, res)=>{
    
     const viajes = await Viaje.findAll({limit: 3});
    
     const testimoniales = await Testimonial.findAll({limit: 3});

     res.render('index',{

        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    });
}