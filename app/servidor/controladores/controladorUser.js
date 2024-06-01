const mongoose = require('mongoose');
const Usuario = require('../modelos/modeloUsuarios');

const regUsuario = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
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
        let user= new Usuario();
        const userExist= await user.usernameExist(username);

        if(userExist){
            user= await Usuario.findOne({username:username});
            const passwordCorrect = await user.isCorrectPassword(password, user.password
            );
            if (passwordCorrect){
                const accesToken=user.createAccessToken();
                const refreshToken=await user.createRefreshToken();

                return res.status(201).json({ message: 'Ingreso Exitoso', accesToken, refreshToken, user });
            }else{
                return res.status(401).json({ error: 'Usuario y/o Contraseña Inconrrectos'});
            }
        }else{
            return res.status(401).json({error:'el Usuario no existe'})
        }
    } catch(err){
        console.error('Error en el Ingreso', error);
        res.status(500).json({error:'Error al ingresar'})
    }
};

module.exports={
    regUsuario,
    login
}