import React, { useState } from "react";
import estilo from "../styles/informacion.module.css";


function AcordeonInfo({titulo,contenido}){
    const [Activo, setActivo]=useState(false);
    return(
        <div className={estilo.acordeon}>
            <div className={estilo.bloque}>
                <div className={estilo.titulo}
                onClick={()=> setActivo(!Activo)}>
                <h2>{titulo}</h2>
                <span className={estilo.boton}>{Activo ?"-":"+"}</span>
                </div>
                <div className={estilo.contenido}>
                    {Activo && <div className={estilo.contenido}>{contenido}</div>}
                </div>
            </div>
        </div>
        
    )
}


export default AcordeonInfo;