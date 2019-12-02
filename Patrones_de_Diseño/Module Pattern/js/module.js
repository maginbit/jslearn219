/*en los modules no existen variables o funciones protegidas o privadads o publicas como en php o java o c++
uno debe definir como seran las variables o funciones EFFi*/

// Funcion 

const comprarBoleto = (function(){
    
    
    //Aqui esta lo privado
    let evento = 'Conferencia JS 2019';
    let precio =25000;
    const adquirirBoleto = () =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprar Boleto para: ${evento} al precio de ${precio}`;
        document.querySelector('#app').appendChild(elemento);
    }


    //Aqui lo Publico
    return {
        mostrarBoleto : function(){
            adquirirBoleto();
        }
    }
})();

comprarBoleto.mostrarBoleto();