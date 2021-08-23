import React from 'react';
import './Encabezado.estilos.css'
// import filtro from '../../utils/img/Vector.svg'
function Encabezado() {
    return (
      <div className="componenteEncabezado">
        <div className="buscarFiltrarYFecha">
              <div className="filtrarUsuario">
                <input
                        type="text"
                        className="input"
                        placeholder="Search..."
                        name=""
                        autocomplete="off"
                />
              {/* <img src={filtro}/> */}
            </div>
            <select className="fecha">
                <option>Wed, 20 May</option>
            </select>
        </div>
      </div>
    );
  }
  export default Encabezado;