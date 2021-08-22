import React from 'react';
import './Faltante.estilos.css'
// import hola from '../../utils/img/detener.svg'
function Faltante() {
    return (
      <div className="componenteFaltante">
            <div className="azulRey EncabezadYFinalTabla">
              <h3>Lo que no completaste ayer...</h3>
                <table className="tablaGeneral">
                  <tbody>
                    <tr className="filasTabla color1">
                      <td className="casilla1">Andrés Camilo Melo Vargas</td>
                      <td>Llamar</td>
                      <td>circulo, llamada, mensaje</td>
                    </tr>
                    <tr className="filasTabla color2 fondoGris">
                      <td className="casilla1">Gustavo Cardenas Rodriguez</td>
                      <td>Llamar</td>
                      <td>circulo, llamada, mensaje</td>
                    </tr>
                    <tr className="filasTabla color3">
                      <td className="casilla1">Daniela Llano Sanchez</td>
                      <td>Llamar</td>
                      <td>circulo, llamada, mensaje</td>
                    </tr>
                    <tr className="filasTabla color4 fondoGris">
                      <td className="casilla1">Giovanni Amado Guzman</td>
                      <td>Llamar</td>
                      <td>circulo, llamada, mensaje</td>
                    </tr>
                    <tr className="filasTabla color5">
                      <td className="casilla1">Stefan Cubides Zabaleta</td>
                      <td>Llamar</td>
                      <td>circulo, llamada, mensaje</td>
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