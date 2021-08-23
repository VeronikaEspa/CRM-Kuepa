import React from 'react';
import './Contacto.estilos.css'
import flecha from '../../utils/img/flechaMenu.svg'
import TarjetaContactos from './TarjetaContactos';
function Contactos(){
    return (
      <div className="componenteContactos degradeAzul">
          <img src={flecha} className="flechaContacto"/>
        <div className="notificaciones">
            <TarjetaContactos/>
        </div>
      </div>
    );
  }
export default Contactos;