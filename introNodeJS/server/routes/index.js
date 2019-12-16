const express = require('express');
const router = express.Router();


//Controladores
const nosotrosController = require('../controllers/nosotrosControllers');
const homeController = require('../controllers/homeControllers');
const viajeController = require('../controllers/viajesCotrollers');
const testimonialController = require('../controllers/testimonialesControllers');

module.exports = function(){
    
    //vista home
    router.get('/', homeController.consultasHomePage);

    //Vista nosotros
    router.get('/nosotros', nosotrosController.infoNosotros);

    //vista viajes
    router.get('/viajes', viajeController.infoViajes);
    
    //Rutas para las vistas con id
    router.get('/viajes/:id', viajeController.idViajes);
    
    //mostrar testimonios nota: importante las rutas unas van antes que otras
    router.get('/testimoniales', testimonialController.vistaTestimonios);
    
    //cuando se llena del formulario
    router.post('/testimoniales', testimonialController.infoTestimoniales);
       
    

return router;
    


}