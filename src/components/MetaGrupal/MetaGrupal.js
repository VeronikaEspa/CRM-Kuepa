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
                    <p>Leads obtenidos</p>
                    <p>200/400</p>
                </div>
                <div className="">
                    <img src={barra}/>
                </div>
            </div>
            <div className="">
                <div className="textoAnesdeBarra">
                        <p>Matriculas realizadas</p>
                        <p>50/100</p>
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