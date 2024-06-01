import React,{useState} from "react";
import estilo from "../styles/inRegister.module.css";

function FormularioRegUsuario(){
    const [formUsuario, setFormUsuario] = useState({ username:'', email:'', password:''});
    const handleChange = (e) => {
    const {target}=e;
    const { name, value } = target;
    setFormUsuario({ ...formUsuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/proy/mongoDB/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formUsuario),
      })
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al enviar el registro:'+ error);
    }};

    return(
        <div>
            <form onSubmit={handleSubmit} className={estilo.formulario}>
                <label> Registra un Usuario:  
                    <input type="text" id="username" placeholder="Escribe un usuario" name="username" 
                    value={formUsuario.username} onChange={handleChange} required/>
                </label>
                <label> Registra un e-mail:  
                    <input name="email" type="email" placeholder="Escribe un correo"
                    value={formUsuario.email} onChange={handleChange}required/>
                </label>
                <label>Ingresa una Contraseña:  
                    <input name="password" type="password"  placeholder="Crea una Contraseña"
                    value={formUsuario.password} onChange={handleChange}required></input>
                </label>
                <input className={estilo.boton} type="submit" value="Registrar" />
            </form>
        </div>
        
    )
};

export default FormularioRegUsuario;