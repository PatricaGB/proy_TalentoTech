import React from "react";
import Titulo from "../desarrolloIn/Titulo";
import FomularioIngreso from "../desarrolloIn/Form_Login";
import estilo from "../styles/login.module.css";
import BtnRegistrar from "../componentes/btnresgistro";

function Login() {
    return(
        <div className={estilo.general}>
            <Titulo/>
            <FomularioIngreso/>
            <BtnRegistrar/>
        </div>
        
    );
  }
  export default Login;

