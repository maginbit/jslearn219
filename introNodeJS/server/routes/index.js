const express = require('express');
const router = express.Router();

//modelo viaje
const Viaje = require('../models/viajes');
//modelo testimoniales
const Testimonial = require('../models/Testimoniales');


module.exports = function(){

    router.get('/',(req, res)=>{
        Viaje.findAll({
            limit: 3
        })
             .then(viajes => res.render('index',{
                 pagina: 'Proximos Viajes',
                 clase: 'home',
                 viajes
             }))
             .catch(error => console.log(error));
    });
    router.get('/nosotros',(req, res)=>{
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        });
    });
    router.get('/viajes',(req, res)=>{
        
        Viaje.findAll()
             .then(viajes => res.render('viajes',{
                 pagina: 'Proximos Viajes',
                 viajes
             }))
             .catch(error => console.log(error));
    });
    
    //Rutas para las vistas con id
    router.get('/viajes/:id',(req, res)=>{
        
        Viaje.findByPk(req.params.id)
            .then(viaje => res.render('viaje',{
            viaje
            }))
            .catch(error => console.log(error));
    });
    
    //mostrar testimonios nota: importante las rutas unas van antes que otras
    router.get('/testimoniales',(req, res)=>{
        
        Testimonial.findAll()
             .then(testimoniales => res.render('testimoniales',{
                 pagina: 'Testimoniales',
                 testimoniales
             }))
    });
    
    
        //cuando se llena del formulario
    router.post('/testimoniales',(req, res) =>{
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
    });
       
    

return router;
    


}