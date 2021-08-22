import React from 'react';
import './Contacto.estilos.css'
import whats from '../../utils/img/whatsapp.svg'
import flecha from '../../utils/img/flechaMenu.svg'
function Contactos() {
    return (
      <div className="componenteContactos degradeAzul">
          <img src={flecha} className="flechaContacto"/>
        <div className="notificaciones">
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">Jorge Garcia</h3>
                    <p>6 min ago</p>
                </div>
            </div>
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">Jorge Garcia</h3>
                    <p>6 min ago</p>
                </div>
            </div>
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">Jorge Garcia</h3>
                    <p>6 min ago</p>
                </div>
            </div>
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">Jorge Garcia</h3>
                    <p>6 min ago</p>
                </div>
            </div>
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">Jorge Garcia</h3>
                    <p>6 min ago</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default Contactos;