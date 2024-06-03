import React, {useState} from "react";
import estilo from "../styles/login.module.css";
import { useNavigate } from "react-router-dom";//para enrutar entre paginas

function FomularioIngreso(){
  const [username,setUsuario]=useState("");
  const [password,setContraseña]=useState("");
  const navegar=useNavigate();
             
  const Sumision= async (event)=>{
      event.preventDefault();
      console.log("Enviando "+username+" "+password)
      const user = {username,password}
      console.log(user);
      try {
        const response = await fetch('/proy/mongoDB/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
        const data = await response.json();
        console.log(data);
        if({messaje:'Ingreso Exitoso', user}){
          navegar('/inicio')
        }
        
      } catch (error) {
        console.error('Error al enviar el usuario'+ error);
      }};

    return(
      <div className={estilo.formulario}>
      <form onSubmit={Sumision}>
          <label> Ingrese Usuario:  
              <input name="usuario" type="text" value={username} placeholder="Escribe tu Usuario"
              onChange={(evento)=>setUsuario(evento.target.value)} required/>
          </label>
          <label>Ingrese Contraseña:  
              <input name="Contaseña" type="password" value={password} placeholder="Escribe tu Contraseña"
              onChange={(evento)=>setContraseña(evento.target.value)} required></input>
          </label>
          <input className={estilo.boton} type="submit" value="Iniciar Sesión" />
      </form>
  </div>
  
);
}


export default FomularioIngreso;