import React from "react";
import TituloProy from "../desarrollo_Proy/TituloPr";
import FormularioProy from "../desarrollo_Proy/Form_Proyectos";
import Pestañas from "../componentes/menu";


function Proyectos() {
    return(
        <div>
            <Pestañas/>
            <TituloProy/>
            <FormularioProy/>
        </div>
        
    );
  }
  export default Proyectos;