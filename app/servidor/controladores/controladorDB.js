const mongoose = require('mongoose');
const Proyect = require('../modelos/modeloMDB');

const proyectoNuevo = async (req, res) => {
    try {
        const { Contrato, Proyecto, Valor, Plazo, Fact } = req.body;


        if (!Contrato || !Proyecto || !Valor || !Plazo) {
            return res.status(400).json({ error: 'Se requiere ingresar los campos'});
        }

        const valor = parseFloat(Valor);
        const plazo = parseInt(Plazo);
        const proyecto = new Proyect({Contrato, Proyecto, Valor:valor, Plazo:plazo, Fact:parseFloat((Valor/Plazo).toFixed(2))});
        await proyecto.save();
        res.status(201).json({ message: 'Proyecto creado exitosamente', proyecto });
        
    } catch (error) {
        console.error('Error al crear proyecto en MongoDB:', error);
        res.status(500).json({ error: 'Error al crear proyecto' });
    }
    
};

const obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyect.find();
        res.json(proyectos);
        console.log("acceso a base"+proyectos);
    } catch (error) {
        console.error('Error al obtener informacion de proyectos en MongoDB:', error);
        res.status(500).json({ error: 'Error al obtener proyectos' });
    }
};

module.exports = {
    proyectoNuevo,
    obtenerProyectos,
}