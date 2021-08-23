import React from 'react';
import './Encabezado.estilos.css'
import filtro from '../../utils/img/filtro.svg'
function Encabezado() {
    return (
      <div className="componenteEncabezado buscarFiltrarYFecha">
            <div className="filtrarUsuario">
                <input
                        type="text"
                        className="input"
                        placeholder="Search..."
                        name=""
                        autocomplete="off"
                />
                <img src={filtro} className="filtrar"/>
            </div>
            <select className="fecha">
                <option>Wed, 20 May</option>
            </select>
        </div>
    );
  }
  export default Encabezado;