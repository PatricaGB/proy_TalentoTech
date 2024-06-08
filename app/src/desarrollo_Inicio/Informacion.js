import React, { useState } from "react";
import estilo from "../styles/informacion.module.css";
import AcordeonInfo from "./acordeonInfo";

const Informacion = () =>{
    const DatosInfo =[
        {
            id:1,
            titulo:"Nuestra App",
            contenido:"Desarrollamos una aplicacion que tiene como objetivo un manejo optimo de proyectos," 
            +" permitiendo que el usuario pueda agregar, consultar y generar un reporte del estado actual"
            +" de ingresos sobre proyectos anuales"
        },
        {
            id:2,
            titulo:"Uso de la App",
            contenido:"1.En el apartado pryectos nuevos podremos ingresar proyectos"
            +" 2.En el apartado registros podemos ver los proyectos que tenemos ingresados"
        },
        {   
            id:3,
            titulo:"Noticias",
            contenido:"Nos encontramos trabajando en el desarrollo de esta nueva aplicacion,"
             +" actualmente nuestra te encuentras usando nuestra version base"
        }
    ];
    
    return(
        <div>
            <div className={estilo.acordeon}></div>
            {DatosInfo.map((dato)=>(
            <AcordeonInfo key={dato.id} titulo={dato.titulo} contenido={dato.contenido}/>))}
        </div>
    )
}
export default Informacion;