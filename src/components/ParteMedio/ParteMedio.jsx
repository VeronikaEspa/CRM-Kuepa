import React from 'react';
import './ParteMedio.estilos.css'
import Encabezado from '../Encabezado/Encabezado'
import MetaGrupal from '../MetaGrupal/MetaGrupal';
import MetaIndividual from '../MetaIndividual/MetaIndividual';
import Faltante from '../Faltante/Faltante'
import Plan from '../Plan/Plan';
function ParteMedio() {
    return (
      <div className="totalParteMedio">
        <div className="">
            <Encabezado/>
            <div className="cuatroContenedores">
                <MetaIndividual/>
                <MetaGrupal/>
                <Faltante/>
                <Plan/>
            </div>
        </div>
      </div>
    );
  }
  export default ParteMedio;