import React from 'react';
import './Menu.estilos.css'
import home from '../../utils/img/home.svg'
import file from '../../utils/img/file.svg'
import cuadro from '../../utils/img/detener.svg'
import logo from '../../utils/img/logoKuepa.png'
import notifi from '../../utils/img/notifi.svg'
import Ana from '../../utils/img/ana.png'
function Menu() {
    return (
      <div className="componenteMenu degradeAzul">
        <div className="parteArribaMenu">
            <div className="logoKuepa">
                <img src={logo} alt="Kuepa"/>
            </div>
            <div className="paginasDelMenu">
                <img src={home} alt="Inicio"/>
                <img src={file} alt="Documento"/>
                <img src={cuadro} alt="Otros"/>
            </div>
        </div>
        <div className="parteAbajoMenu">
            <div className="usuarioNotifi">
                <img src={notifi} alt="Documento" className="notifi"/>
                <img src={Ana} alt="Ana" className="ana"/>
            </div>
        </div>
      </div>
    );
  }
  export default Menu;