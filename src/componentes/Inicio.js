import React, { Component } from 'react';



class Inicio extends Component {
    render() {
      return (
   
        <div className="alert alert-primary fade show mt-3 animated flash" role="alert">
            <strong>Hola Carlos!</strong> Bienvenido a las Notas.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        
      );
    }
  }
  
  export default Inicio;
  