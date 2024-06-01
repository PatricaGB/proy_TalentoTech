import React from "react";
import Logo from "../imagen/basica.png";
import estilo from "../styles/login.module.css";

function Titulo(){
    return(
        <div className={estilo.contenido}>
            <img className={estilo.logo} src={Logo}/>
            <h1 className={estilo.titulo}>Inicio de Sesión</h1>
        </div>
    );
}

export default Titulo;