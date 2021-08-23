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
            <div className="primeraLineaMeta">
              <div className="objetivosIndividual">
                  <p className="descripcionObjetivoIndividual">Leads obtenidos</p>
                  <p>50/100</p>
              </div>
              <div className="objetivosIndividual">
                <p className="descripcionObjetivoIndividual">Matriculas finalizadas</p>
                <p>10/20</p>
              </div>
              </div>
              <div className="objetivosIndividual">
                  <p className="descripcionObjetivoIndividual">Cola de llamados</p>
                  <p>50/100</p>
            </div>
        </div>
      </div>
    );
  }
  export default MetaIndividual;