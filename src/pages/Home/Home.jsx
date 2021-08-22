import React from 'react';
import {Encabezado, MetaIndividual, MetaGrupal, Faltante, Plan} from '../../components'
import './Home.estilos.css'
function Home() {
    return (
        <div className="totalParteMedio">
        <div className="">
            <Encabezado/>
            <div className="cuatroContenedores">
              <div className="dobleContenedor1">
                <MetaIndividual/>
                <MetaGrupal/>
              </div>
                <div className="dobleContenedor2">
                <Faltante/>
                <Plan/>
              </div>
            </div>
        </div>
      </div>
    );
  }
  export default Home;