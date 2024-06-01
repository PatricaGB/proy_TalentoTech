import estilo from "../styles/pie.module.css";

const Pie=()=>{
    return (
        <div>
            <footer>
                <div className={estilo.pie}>
                    <h4>Contactanos</h4>
                    <p>info@proyectoweb.com</p>   
                    <p>©2024 Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
        
    );
}
export default Pie;