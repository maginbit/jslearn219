import React, { Component } from 'react'



class Formulario extends Component {
    // se recomienda tener los mismos nombres en los compoentes html que en los nombres de state, para un mejor mapeo
    state = { 
        cantidad: '',
        plazo: ''
     }
     actualizarState = (e) => {
      //leer datos del formulario
      console.log(e.target.value);
    //destructuring
      const {name, value} = e.target

      //Actulizar el state
      this.setState({
          [name] : Number(value)
      })
     }
    render() { 
        return ( 
               <form>
                    <div>
                        <label>Cantidad de Prestamo</label>
                        <input
                            onChange = {this.actualizarState}
                            type="number"
                            name="cantidad" 
                            className="u-full-width" 
                            placeholder="Ejemplo: 3000"/>
                    </div>
                    <div>
                        <label>Plazo para pagar</label>
                        <select name="plazo" className="u-full-width" onChange = {this.actualizarState}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 Meses</option>
                            <option value="6">6 Meses</option>
                            <option value="12">12 Meses</option>
                            <option value="24">24 Meses</option>
                        </select>    
                    </div>  
                    <div>
                        <input 
                        
                         type="submit"
                         value="Calcular"
                         className="u-full-width button-primary"
                        />

                    </div>  
               </form>
         );
    }
}
 
export default Formulario;