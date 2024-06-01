import React from "react";
import FormularioRegUsuario from "../desarrollo_registrarUs/FormRegistrar";
import estilo from "../styles/inRegister.module.css";
import Btnlogin from "../componentes/btnlogin";

function Registrar () {
    return(
        <div className={estilo.general}>
            <h1>Registrar Nuevo Usuario</h1>
            <FormularioRegUsuario/>
            <Btnlogin/>
        </div>
    )};

export default Registrar;