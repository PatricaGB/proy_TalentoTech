import { NavLink } from "react-router-dom";
import styles from "../styles/menu.module.css";

const Pestañas=()=>{
            
    return (
        <nav id="nav" className={styles.menu}> 
            <ul>
                <li><NavLink to="/inicio">Inicio</NavLink></li>
                <li><NavLink to="/Proyectos">Proyectos Nuevos</NavLink></li>
                <li><NavLink to="/Registros">Registros</NavLink></li>
                <li><NavLink to="/">Cerrar Sesión</NavLink></li>
            </ul>
        </nav>
                
            );
        }

export default Pestañas;