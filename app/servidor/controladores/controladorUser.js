const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const Usuario = require('../modelos/modeloUsuarios');

const regUsuario = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user= await Usuario.findOne({username});
        const correo= await Usuario.findOne({email});
        if (user){
            return res.json({mensaje: 'Ya hay un usuario registrado con el usuario'});
        }
        else if(correo){
            return res.json({mensaje: 'Ya hay un usuario registrado con el email'});
        }
        else if (!username || !email || !password) {
            return res.status(400).json({ error: 'Se requiere ingresar los campos'});
        }
        
        const usuario = new Usuario({username, email, password});
        await usuario.save();
        res.status(201).json({ message: 'Usuario creado exitosamente', usuario });
        
    } catch (error) {
        console.error('Error al crear el usuario en MongoDB:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
    
};

const login = async (req, res) => {
    
    try{
        const {username, password}=req.body;

        const user= await Usuario.findOne({username:username});
        if (user){
        const passw= await Usuario.findOne({password:password});
        
            if (passw){
                return res.status(201).json({ message: 'Ingreso Exitoso', user });
            }else{
                return res.status(401).json({ error: 'Contraseña Inconrrecta'});
            }
        } else{
            return res.status(401).json({error:'el Usuario no existe'})
        }
    }catch(error){
        console.error('Error en el Ingreso', error);
        res.status(500).json({error:'Error al ingresar'})
    }
  
};


module.exports={
    regUsuario,
    login
}