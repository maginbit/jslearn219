/*En este archivo el enlace de lista, configuracion del servidor y mas configuracion principales */
//importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');


//configurar express
const app = express();
//habilitar pug
app.set('view engine', 'pug');
//añadir vistas
app.set('views', path.join(__dirname, './views'));
//Cargar carpeta public
app.use(express.static('public'));

//VAlidar si esta Desarro o Produc
const config = configs[app.get('env')];
//crear variable para sitio web
app.locals.titulo = config.nombresitio;

//Muestra el año actual y genera ruta
app.use((req, res, next)=>{
    //crear nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;//retorna ruta del barra de direccion
    //console.log(res.locals);
    return next();
});
//ejecutar el bodyparser
app.use(bodyParser.urlencoded({extended: true}));

//Cargar Rutas
app.use('/',routes());

app.listen(3000);