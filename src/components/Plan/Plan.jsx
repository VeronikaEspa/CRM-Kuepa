import React from 'react';
import './Plan.estilos.css'
// import hola from '../../utils/img/detener.svg'
function Plan() {
    return (
      <div className="componentePlan">
        <p>Ir a la gestión de llamados</p>
        <h3>Tu plan de hoy</h3>
        <div className="conjuntoDeTarjetas">
            <div className="tarjetaPlan">
                <h1 className="numeroCantidad">30</h1>
                <h4 className="descripciondeLosNumeros">Leads de primer contacto</h4>
                <h5>16</h5>
                <h5>16</h5>
            </div>
            <div className="tarjetaPlan">
                <h1 className="numeroCantidad">20</h1>
                <h4 className="descripciondeLosNumeros">Leads de confirmar cita</h4>
                <h5>16</h5>
                <h5>16</h5>
            </div>
            <div className="tarjetaPlan">
                <h1 className="numeroCantidad">10</h1>
                <h4 className="descripciondeLosNumeros">Leads de ultimo intento</h4>
                <h5>16</h5>
                <h5>16</h5>
            </div>
        </div>
      </div>
    );
  }
  export default Plan;