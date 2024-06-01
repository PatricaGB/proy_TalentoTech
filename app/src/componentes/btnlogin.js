import { NavLink } from "react-router-dom";
import estilo from "../styles/inRegister.module.css";

const Btnlogin = () => {
    return (
        <nav className={estilo.btnlogin}> 
            <ul>
                <li><NavLink to="/">Volver al login</NavLink></li>
            </ul>
        </nav>
                
        );
}

export default Btnlogin;