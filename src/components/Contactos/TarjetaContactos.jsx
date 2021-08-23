import React from 'react';
import whats from '../../utils/img/whatsapp.svg'
import face from '../../utils/img/facebook.svg'
import mail from '../../utils/img/mail.svg'
export default class TarjetaContactos extends React.Component{
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
        const name = this.state.datos[10].name
        const name2 = this.state.datos[20].name
        const name3 = this.state.datos[30].name
        const name4 = this.state.datos[40].name
        const name5 = this.state.datos[50].name
        const name6 = this.state.datos[61].name
    return (
        <div>
        <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <p>Whatsapp</p>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">{name}</h3>
                    <p>3 min ago</p>
                </div>
            </div>
        <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <p>Facebook</p>
                    <img src={face} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">{name2}</h3>
                    <p>6 min ago</p>
                </div>
        </div>
        <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <p>Mail</p>
                    <img src={mail} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">{name3}</h3>
                    <p>7 min ago</p>
                </div>
        </div>
        <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <p>Whatsapp</p>
                    <img src={whats} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">{name4}</h3>
                    <p>9 min ago</p>
                </div>
            </div>
        <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <p>Facebook</p>
                    <img src={face} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">{name5}</h3>
                    <p>10 min ago</p>
                </div>
        </div>
        <div className="tarjeta1">
                <div className="arribaTarjeta">
                    <p>Mail</p>
                    <img src={mail} className="iconoRedSocial"/>
                </div>
                <div className="abajoTarjeta">
                    <h3 className="nombrePersona">{name6}</h3>
                    <p>16 min ago</p>
                </div>
        </div>
    </div>
    );
  }
}