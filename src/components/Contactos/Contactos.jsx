import React from 'react';
import './Contacto.estilos.css'
import whats from '../../utils/img/whatsapp.svg'
// import file from '../../utils/img/file.svg'
// import cuadro from '../../utils/img/detener.svg'
function Contactos() {
    return (
      <div className="componenteContactos degradeAzul">
        <div className="notificaciones">
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3>Jorge Garcia</h3>
                    <h6>6 min ago</h6>
                </div>
            </div>
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3>Jorge Garcia</h3>
                    <h6>6 min ago</h6>
                </div>
            </div>
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3>Jorge Garcia</h3>
                    <h6>6 min ago</h6>
                </div>
            </div>
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3>Jorge Garcia</h3>
                    <h6>6 min ago</h6>
                </div>
            </div>
            <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <h4>Whatsapp</h4>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3>Jorge Garcia</h3>
                    <h6>6 min ago</h6>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default Contactos;