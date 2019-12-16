//modelo viaje
const Viaje = require('../models/viajes');

exports.infoViajes = (req, res)=>{
        
    Viaje.findAll()
         .then(viajes => res.render('viajes',{
             pagina: 'Proximos Viajes',
             viajes
         }))
         .catch(error => console.log(error));
}

exports.idViajes = (req, res)=>{
        
    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje',{
        viaje
        }))
        .catch(error => console.log(error));
}