import React from 'react';
import './MetaIndividual.estilos.css'
import nivel50 from '../../utils/img/50.png'
function MetaIndividual() {
    return (
      <div className="componenteIndividualMeta azulRey">
        <div className="ubicacionContenedor">
            <div className="nivel50">
                <img src={nivel50}/>
            </div>
            <div className="">
              <div className="objetivosIndividual">
                  <h3>Leads obtenidos</h3>
                  <h3>50/100</h3>
              </div>
              <div className="objetivosIndividual">
                <h3>Matriculas finalizadas</h3>
                <h3>10/20</h3>
              </div>
              <div className="objetivosIndividual">
                  <h3>Cola de llamados</h3>
                  <h3>50/100</h3>
              </div>
            </div>
        </div>
      </div>
    );
  }
  export default MetaIndividual;