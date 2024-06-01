import React, { useState, useEffect } from 'react';
import estilo from "../styles/registro.module.css";
import Logo from "../imagen/basica.png";


const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })

function RegistroProy(){
    const [datos, setDatos]=useState([]);
    
    useEffect(()=>{
        fetch('/proy/mongoDB/infoproy')
        .then((res)=>res.json())
        .then((datos)=>setDatos(datos));
    },[datos.length]);

  return (
    <div>
        <img className={estilo.imgRg} src={Logo}/>
        <h1 className={estilo.tituloRg}>Proyectos Registrados</h1>
        <table className={estilo.tablaRg}>
            <thead>
              <tr>
                <th scope="col">Contrato</th>
                <th scope="col">Proyecto</th>
                <th scope="col">Valor</th>
                <th scope="col">Plazo</th>
                <th scope="col">Facturacion/Mes</th>
              </tr>
            </thead>
            <tbody>
                {datos.map((dato)=>(
                  <tr key={dato.id}>
                  <td>{dato.Contrato}</td>
                  <td>{dato.Proyecto}</td>
                  <td>{formatter.format(dato.Valor)}</td>
                  <td>{dato.Plazo} Meses</td>
                  <td>{formatter.format(dato.Fact)}</td>
                </tr>
                ))}
             </tbody>
        </table>
    </div>
  );
}

export default RegistroProy;