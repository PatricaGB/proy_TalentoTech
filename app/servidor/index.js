const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require('./DB/BaseDatos');
const rutasMongoDB = require('./rutas/rutasMongoDB');

const TokenLogin = require('./intermediario/token');

const puerto = process.env.PORT || 3001;

//se verifica si el server inicia
app.get('/', (req,res)=>{
    res.send('Hola Mundo!');
});

app.listen(puerto, ()=>{
    console.log(`escuchando http://localhost:${puerto}`);
});

//Ruta /proyecto
app.get("/proy", (req,res)=>{
    res.json({mensaje:"Hola desde el Servidor para proyectos"});
});

//para parsear/analizar el body con la url y pasarla a json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
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

//Rutas Token
app.post('/auth', TokenLogin.TokenaCookieDB);
// Ruta protegida
app.use('/basedatos', TokenLogin.verifyTokenenCookie, rutasMongoDB);

// Rutas base de datos
app.use('/proy/mongoDB',rutasMongoDB);



//conexion a base de datos
connectDB();

