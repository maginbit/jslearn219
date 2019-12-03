class Formulario{
    constructor(){
        this.campos = []
    }

    agregarCampo(tipo, texto){

        let campos = this.campos;

        let campo;

        switch (tipo) {
            case "text":
                campo = new InputText(texto);
                
                break;
            
            case "email":
                campo = new InputEmail(texto);
                
                break;
             case "button":
                campo = new Buton(texto);
                break;             
        
            default:
                throw new Error("Tipo no valido"+tipo);
        }
        campos.push(campo);

    }

    //obtener formulario

    obtenerFormulario(){
        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;
       for (let i = 0; i < campos; i++) {
            campo = this.campos[i];
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
           
       }     
       return form;

    }
}

class Inputs{
    constructor(texto){
            this.texto = texto;
    }
}
//Clases Inputs
class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputText = document.createElement('input');
             inputText.setAttribute('type','text');
             inputText.setAttribute('placeholder', this.texto);
             return inputText;
    }
}
class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputEmail = document.createElement('input');
             inputEmail.setAttribute('type','email');
             inputEmail.setAttribute('placeholder', this.texto);
             return inputEmail;
    }
}
class Buton extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputButon = document.createElement('input');
             inputButon.setAttribute('type','button');
             inputButon.setAttribute('placeholder', this.texto);
             return inputButon;
    }
}

// Instanciar Formularios
const formulario = new Formulario();
formulario.agregarCampo('text','Añade tu Nombre');
formulario.agregarCampo('text','Añade tu Nombre');
formulario.agregarCampo('email','Añade tu Correo');
formulario.agregarCampo('button','Enviar Formulario');

// Renderizar en HTML

document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector('#app').appendChild(formulario.obtenerFormulario());
});


console.log(formulario);