import React from 'react';
import './MetaGrupal.estilos.css'
import barra from '../../utils/img/barraNivel.svg'
function MetaGrupal() {
    return (
      <div className="componenteGrupal azulRey">
        <div className="">
            <h2 className="tituloMetaGrupal">Meta grupal</h2>
            <div className="">
                <div className="textoAnesdeBarra">
                    <h4>Leads obtenidos</h4>
                    <h4>200/400</h4>
                </div>
                <div className="">
                    <img src={barra}/>
                </div>
            </div>
            <div className="">
                <div className="textoAnesdeBarra">
                        <h4>Matriculas realizadas</h4>
                        <h4>50/100</h4>
                </div>
                <div className="">
                    <img src={barra}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default MetaGrupal;