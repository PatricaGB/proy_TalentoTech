import React from "react";
import TituloInicio from "../desarrollo_Inicio/TituloInicio";
import estilo from "../styles/inicio.module.css";
import Pestañas from "../componentes/menu";
import Informacion from "../desarrollo_Inicio/Informacion";


function Inicio() {
    
    return(
        <div className={estilo.general}>
            <Pestañas/>
            <TituloInicio/>
            <Informacion/>
        </div>
        
    );
  }
  export default Inicio;
