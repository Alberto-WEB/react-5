import React, { Component } from 'react';



class Notas extends Component {
    render() {
      return (
   
        <div className="row mt-3">
          <div className="col-sm-6">
            <div className="card animated bounceInLeft">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card animated bounceInRight">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        
      );
    }
  }
  
  export default Notas;
  