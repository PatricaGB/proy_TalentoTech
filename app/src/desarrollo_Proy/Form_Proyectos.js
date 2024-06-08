import React, {useState, useEffect} from "react";
import estilo from "../styles/proyectos.module.css";

function FormularioProy(){
  const [formData, setFormData] = useState({ Contrato:'', Proyecto:'', Valor:'', Plazo:'', Fact:''});
  const handleChange = (e) => {
    const {target}=e;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/proy/mongoDB/ingproyecto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json();
      console.log(data);
      if(data.message ==='Proyecto creado exitosamente'){
        alert('Proyecto Ingresado Correctamente')
      }
    } catch (error) {
      console.error('Error al enviar el formulario:'+ error);
    }};

   return (
      <>
        <div className={estilo.entradas}>
          <form onSubmit={handleSubmit} className={estilo.form}>
            <div className={estilo.partes}>
              <label>
                <p className={estilo.titulo}>Contrato:</p>
                <input
                  type="text"
                  className={estilo.casilla}
                  id="Contrato"
                  placeholder="No. de Contrato"
                  name="Contrato"
                  value={formData.Contrato}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className={estilo.partes}>
              <label>
                <p className={estilo.titulo}>Proyecto:</p>
                <input
                  type="text"
                  className={estilo.casilla}
                  id="Proyecto"
                  placeholder="Objeto de Proyecto"
                  name="Proyecto"
                  value={formData.Proyecto}
                  onChange={handleChange}
                  required 
                />
              </label>
            </div>
            <div className={estilo.partes}>
              <label>
                <p className={estilo.titulo}>Valor:</p>
                <input
                  type="number"
                  className={estilo.casilla}
                  id="Valor"
                  placeholder="$"
                  name="Valor"
                  value={formData.Valor}
                  onChange={handleChange}
                  required 
                />
              </label>
            </div>
            <div className={estilo.partes}>
              <label>
                <p className={estilo.titulo}>Plazo:</p>
                <input
                  type="number"
                  className={estilo.casilla}
                  id="Plazo"
                  placeholder="Plazo en Meses"
                  name="Plazo"
                  value={formData.Plazo}
                  onChange={handleChange}
                  required 
                />
              </label>
            </div>
            <div className={estilo.partes}>
              <label>
                <p className={estilo.titulo}>Facturacion:</p>
                <input
                  type="number"
                  className={estilo.casilla}
                  id="Fact"
                  name="Fact"
                  value={((formData.Valor/formData.Plazo).toFixed(2))}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="proy_btn">
              <button type="submit" className="btn btn-primary">
                Agregar
              </button>
            </div>
          </form>
        </div>
        </>
    );
  
}

export default FormularioProy;