const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require('./DB/BaseDatos');
const rutasMongoDB = require('./rutas/rutasMongoDB');
const rutasUsuarios = require('./rutas/rutasIngreso');
const {login} = require('./controladores/controladorUser')
const TokenLogin = require('./intermediario/token');
const cookieParser = require("cookie-parser");
const TOKEN = require('./config');

const puerto = process.env.PORT || 3001;

//se verifica si el server inicia
app.get('/', (req,res)=>{
    res.send('Hola Mundo!');
});

//Ruta /proyecto
app.get("/proy", (req,res)=>{
    res.json({mensaje:"Hola desde el Servidor para proyectos"});
});

//para parsear/analizar el body con la url y pasarla a json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
app.use(cookieParser());
/*//arreglo
let proyectos=[
    {id:1, Contrato:"2830", Proyecto:"interventoria", Valor:12000, Plazo: 12, Fact: 1000},
];

//solicitud POST formulario
app.post('/proy/registro', (req, res) => {
    const { Contrato, Proyecto, Valor, Plazo, Fact } = req.body;
    console.log(req.body);
    res.json({ message: 'Datos recibidos correctamente' });
    const valor = parseFloat(Valor);
    const plazo = parseInt(Plazo)
    proyectos.push({ id: proyectos.length + 1, Contrato, Proyecto, Valor:valor, Plazo:plazo, Fact:parseFloat((Valor/Plazo).toFixed(2))});
    console.log(proyectos);
});

app.get('/proy/registro', (req, res) => {
    res.json(proyectos);
})*/
// Rutas base de datos
app.use('/proy/mongoDB',rutasMongoDB);

const jwtvalid = (req, res, next)=>{
    try{
    const token = req.cookies.jwt
    const validPayload=jwt.verify(token, TOKEN.TOKEN_SECRET)
    console.log(validPayload);
    next();
}catch(error){
    res.status(401).json({ok:false}, {message:'token invalido'})
}

};

app.use(jwtvalid)

//Rutas de ingreso
app.use('/proy/Usuario',rutasUsuarios);



//conexion a base de datos
connectDB();

app.listen(puerto, ()=>{
    console.log(`escuchando http://localhost:${puerto}`);
});