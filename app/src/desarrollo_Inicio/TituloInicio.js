import React from "react";
import Logo from "../imagen/basica.png";
import estilo from "../styles/inicio.module.css";

function TituloInicio(){
    return(
        <div className={estilo.contenido}>
            <img src={Logo}/>
            <h1>Hola,...Te damos la Bienvenida!!</h1>
            <p>Podras ver la informacion mas reciente en los siguientes apartados:</p>
        </div>
    );
}

export default TituloInicio;