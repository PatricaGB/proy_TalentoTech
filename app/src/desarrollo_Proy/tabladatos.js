import React, {useState} from "react";
import estilo from "../styles/proyectos.module.css";

function mostrarDatos(){
    return(
        <div className="table_contratos">
          <table className="table table-striped">
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
              {formData.map(item => (
                  <tr key={item.id}>
                    <td>{item.Contrato}</td>
                    <td>{item.Proyecto}</td>
                    <td>{item.Valor}</td>
                    <td>{item.Plazo}</td>
                    <td>{item.Fact}</td>
                  </tr>
                ))}
             </tbody>
          </table>
        </div>
    )
}

export default mostrarDatos;