import React from 'react';
import './Faltante.estilos.css'
import llamada from '../../utils/img/llamada.svg'
import mensaje from '../../utils/img/mensaje.svg'
export default class Faltante extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      datos:[],
      isFetch:true,
    }
  }
  componentDidMount(){
    fetch('https://api.opendota.com/api/proPlayers')
    .then(response =>response.json())
    .then(datosJson => this.setState({datos: datosJson, isFetch:false}))
  };
render() {
  if(this.state.isFetch){
    return 'Loading...'
  }
  const name = this.state.datos[1].name
  const name2 = this.state.datos[2].name
  const name3 = this.state.datos[3].name
  const name4 = this.state.datos[4].name
  const name5 = this.state.datos[5].name
    return (
      <div className="componenteFaltante">
            <div className="azulRey EncabezadYFinalTabla">
              <div className="TituloTabla">
              <h3>Lo que no completaste ayer...</h3>
              </div>
                <table className="tablaGeneral">
                  <tbody>
                  <tr className="filasTabla color1">
                      <td className="casilla1">{name}</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo colorAmarillo"></div><img src={llamada}/><img src={mensaje}/></td>
                  </tr>
                  <tr className="filasTabla color2 fondoGris">
                    <td className="casilla1">{name2}</td>
                    <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                    <td className="opcionesContactoTabla"><div className="circulo colorAmarillo"></div><img src={llamada}/><img src={mensaje}/></td>
                  </tr>
                    <tr className="filasTabla color3">
                      <td className="casilla1">{name3}</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo colorAmarillo"></div><img src={llamada}/><img src={mensaje}/></td>
                    </tr>
                    <tr className="filasTabla color4 fondoGris">
                      <td className="casilla1">{name4}</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo colorAmarillo"></div><img src={llamada}/><img src={mensaje}/></td>
                    </tr>
                    <tr className="filasTabla color5">
                      <td className="casilla1">{name5}</td>
                      <td className="casillaLlamar"><p>Llamar</p><p className="descuentoTabla">Descuento temporada</p></td>
                      <td className="opcionesContactoTabla"><div className="circulo colorAmarillo"></div><img src={llamada}/><img src={mensaje}/></td>
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
}