import React from "react";
import Logo from "../imagen/basica.png";
import estilo from "../styles/proyectos.module.css";

function TituloProy(){
    return(
        <div className={estilo.ContProy}>
            <img src={Logo}/>
            <h1>Ingreso de Proyectos</h1>
        </div>
    );
}

export default TituloProy;