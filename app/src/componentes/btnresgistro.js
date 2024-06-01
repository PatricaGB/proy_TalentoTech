import { NavLink } from "react-router-dom";
import estilo from "../styles/login.module.css";

const BtnRegistrar = () => {
    return (
        <nav className={estilo.registrar}> 
            <ul>
                <li><NavLink to="/registrar">Registrarse?</NavLink></li>
            </ul>
        </nav>
                
        );
}

export default BtnRegistrar;