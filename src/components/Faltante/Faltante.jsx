import React from 'react';
import './Faltante.estilos.css'
import llamada from '../../utils/img/llamada.svg'
import mensaje from '../../utils/img/mensaje.svg'
function Faltante() {
    return (
      <div className="componenteFaltante">
            <div className="azulRey EncabezadYFinalTabla">
              <div className="TituloTabla">
              <h3>Lo que no completaste ayer...</h3>
              </div>
                <table className="tablaGeneral">
                  <tbody>
                    <tr className="filasTabla color1">
                      <td className="casilla1">Andrés Camilo Melo Vargas</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo colorAmarillo">.</div><img src={llamada}/><img src={mensaje}/></td>
                    </tr>
                    <tr className="filasTabla color2 fondoGris">
                      <td className="casilla1">Gustavo Cardenas Rodriguez</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo colorAmarillo">.</div><img src={llamada}/><img src={mensaje}/></td>
                    </tr>
                    <tr className="filasTabla color3">
                      <td className="casilla1">Daniela Llano Sanchez</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo">.</div><img src={llamada}/><img src={mensaje}/></td>
                    </tr>
                    <tr className="filasTabla color4 fondoGris">
                      <td className="casilla1">Giovanni Amado Guzman</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo colorAmarillo">.</div><img src={llamada}/><img src={mensaje}/></td>
                    </tr>
                    <tr className="filasTabla color5">
                      <td className="casilla1">Stefan Cubides Zabaleta</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo colorAmarillo">.</div><img src={llamada}/><img src={mensaje}/></td>
                    </tr>
                    <tr>
                      <td className="casillaFinal"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>
    );
  }
  export default Faltante;