import React from 'react';
import './Plan.estilos.css'
import flechaPlanes from '../../utils/img/Vector.svg'
import llamada from '../../utils/img/llamada.svg'
import mensaje from '../../utils/img/mensaje.svg'
function Plan() {
    return (
      <div className="componentePlan">
        <div className="botonMas">
          <p>Ir a la gestión de llamados</p>
          <img src={flechaPlanes}/>
        </div>
        <h1 className="TituloPlanes">Tu plan de hoy</h1>
        <div className="conjuntoDeTarjetas">
            <div className="tarjetaPlan">
                <h1 className="numeroCantidad">30</h1>
                <p className="descripciondeLosNumeros">Leads de primer contacto</p>
                <div className="numeroLlamadasMensajes">
                  <img src={llamada}/>
                  <h5>16</h5>
                </div>
                <div className="numeroLlamadasMensajes">
                  <img src={mensaje}/>
                  <h5>16</h5>
                </div>
            </div>
            <div className="tarjetaPlan">
                <h1 className="numeroCantidad">20</h1>
                <p className="descripciondeLosNumeros">Leads de confirmar cita</p>
                <div className="numeroLlamadasMensajes">
                  <img src={llamada}/>
                  <h5>16</h5>
                </div>
                <div className="numeroLlamadasMensajes">
                  <img src={mensaje}/>
                  <h5>16</h5>
                </div>
            </div>
            <div className="tarjetaPlan">
                <h1 className="numeroCantidad">10</h1>
                <p className="descripciondeLosNumeros">Leads de ultimo intento</p>
                <div className="numeroLlamadasMensajes">
                  <img src={llamada}/>
                  <h5>16</h5>
                </div>
                <div className="numeroLlamadasMensajes">
                  <img src={mensaje}/>
                  <h5>16</h5>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default Plan;