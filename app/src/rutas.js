import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./paginas/inicio";
import Proyectos from "./paginas/proyectos";
import Pie from "./componentes/pie";
import Registros from "./paginas/registros";
import Login from "./paginas/login";
import ProtecRuta from "./ProtecRuta";
import Registrar from "./paginas/registrar";

function Rutas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/registrar" element={<Registrar/>}/>
            <Route element={<ProtecRuta/>}>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/Proyectos" element={<Proyectos/>}/>
                <Route path="/Registros" element={<Registros/>}/>
            </Route>              
            </Routes>
            <Pie/>
        </BrowserRouter>
    )
}
export default Rutas;