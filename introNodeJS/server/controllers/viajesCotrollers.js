//modelo viaje
const Viaje = require('../models/viajes');

exports.infoViajes = async (req, res)=>{
        
    const viajes = await Viaje.findAll()
    res.render('viajes',{
        pagina: 'Proximos Viajes',
        viajes
    });
}

exports.idViajes = async (req, res) => {
        
    const viaje = await Viaje.findByPk(req.params.id)
    //console.log(viaje);
    res.render('viaje',{
        viaje
        });
}