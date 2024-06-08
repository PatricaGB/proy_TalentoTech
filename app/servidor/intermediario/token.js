const jwt = require('jsonwebtoken');
const secretKey = 'Bootcamp';
const Usuario = require('../modelos/modeloMDB');

const verificacionTokenDB = (req, res, next) => {
    const tokenrecibido = req.headers['authorization'];
    const token = tokenrecibido.replace(/^Bearer\s/, '');
    if (!token) {
        return res.status(401).json({ message: 'Se requiere token de autenticación' });
    }
    jwt.verify(token, secretKey, (err, decodedToken) => {
        if (err) {
            console.error('Error de verificación de token:', err);
            return res.status(403).json({ message: 'Token no válido' });
        }
        // Extraer nombre de usuario y rol del payload decodificado
        console.log(decodedToken);
        const username = decodedToken.username;
        const rol = decodedToken.rol;
        // Pasar el nombre de usuario y el rol a la siguiente función
        req.user = { username, rol }; 

        next();
    });
};

const verificacionTokenCookieDB = (req, res, next) => {
    const tokenrecibido = req.cookies.nuevoCookie;
    console.log("este es el cookie: "+tokenrecibido);
    if(!tokenrecibido){
        console.log("token no recibido");
        return res.status(403).json({ error: 'Se requiere token de autenticación' });
    }
    //const cookieParts = tokenrecibido.split('=');
    token = tokenrecibido;
    console.log("token:" + token);
    if (!token) {
        return res.status(401).json({ message: 'Se requiere token de autenticación' });
    }

    jwt.verify(token, secretKey, (err, decodedToken) => {
        console.log(decodedToken);
        if (err) {
            console.error('Error de verificación de token:', err);
            return res.status(403).json({ message: 'Token no válido' });
        }

        // Extraer nombre de usuario y rol del payload decodificado
        console.log(decodedToken);
        const username = decodedToken.username;
        const rol = decodedToken.rol;
        // Pasar el nombre de usuario y el rol a la siguiente función
        req.user = { username, rol }; 
        next();
    });
};

module.exports = {
    verificacionTokenDB,
    verificacionTokenCookieDB
}