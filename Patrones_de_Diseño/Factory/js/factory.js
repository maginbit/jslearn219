/*Factory se enfoca en tener objetos pero no saber cuando se instanciaran solo al 
momento de la ejecucion del programa */

function constructorSitios(){
    this.crearElemento = function(texto, tipo){

        let html;

        if (tipo === 'input') {
            html = new InputHTML(texto);
        
        }else if (tipo === 'img') {
            html = new ImagenHTML(texto);
        
        }if (tipo === 'h1') {
            html = new HeadingHTML(texto);
        
        }if (tipo === 'p') {
            html = new ParrafoHTML(texto);
        
        }

        html.tipo = tipo;

        html.mostrar = function(){
            const elemento = document.createElement(this.tipo);
            if (this.tipo === 'input') {
                elemento.setAttribute('placeholder', this.texto);
            }else if (this.tipo === 'img') {
                elemento.setAttribute('src', this.texto);
            }else{
                elemento.appendChild(document.createTextNode(this.texto) );
            }
            document.querySelector('#app').appendChild(elemento);
        }

        return html;

    }
}
//Funciones a instanciar
const HeadingHTML = function(texto){
        this.texto = texto;
}
const ImagenHTML = function(texto){
    this.texto = texto;
}
const InputHTML = function(texto){
    this.texto = texto;
}
const ParrafoHTML = function(texto){
    this.texto = texto;
}

//instanciar
const sitioweb = new constructorSitios();

//Almacenar los Elementos
const elementosWeb = [];

elementosWeb.push(sitioweb.crearElemento('Bienvenido', 'h1'));
elementosWeb.push(sitioweb.crearElemento('Welcome to New Site', 'p'));
elementosWeb.push(sitioweb.crearElemento('logo.png', 'img'));
elementosWeb.push(sitioweb.crearElemento('Conoce Sobre Nosotros', 'h1'));
elementosWeb.push(sitioweb.crearElemento('Contacto', 'input'));
elementosWeb.push(sitioweb.crearElemento('Formularios de Cursos', 'h1'));




console.log(elementosWeb);

elementosWeb.forEach(elemento => {
    elemento.mostrar();
});