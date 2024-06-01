import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";//para enrutar entre paginas
import estilo from "../styles/login.module.css";



function FomularioIngreso(){
    const [usuario,setUsuario]=useState("");
    const [contraseña,setContraseña]=useState("");
    const navegar=useNavigate();

           
    const Sumision=(event)=>{
        event.preventDefault();
        console.log("Enviando "+usuario+" "+contraseña)
        if(usuario==="Usuario" && contraseña==="1234"){
            alert("Bienvenid@ "+usuario);
            navegar("/inicio")//lleva a la pagina de inicio
        } 
        else{
            alert("Campos diligenciados son incorrectos")
        }
        
        
    }
    
    return(
        <div className={estilo.formulario}>
            <form onSubmit={Sumision}>
                <label> Ingrese Usuario:  
                    <input name="usuario" type="text" value={usuario} placeholder="Escribe tu Usuario"
                    onChange={(evento)=>setUsuario(evento.target.value)} required/>
                </label>
                <label>Ingrese Contraseña:  
                    <input name="Contaseña" type="password" value={contraseña} placeholder="Escribe tu Contraseña"
                    onChange={(evento)=>setContraseña(evento.target.value)} required></input>
                </label>
                <input className={estilo.boton} type="submit" value="Iniciar Sesión" />
            </form>
        </div>
        
    );
}


export default FomularioIngreso;