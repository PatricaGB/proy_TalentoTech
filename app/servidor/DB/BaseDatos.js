const mongoose = require('mongoose');

const uri="mongodb+srv://patitog01:8e8WCOXFcOypWkOE@proyectobootcamp.hqdkuxq.mongodb.net/"

mongoose.Promise=global.Promise;

const connectDB = async () => {
    try {
        await mongoose.connect(uri)
            .then(() => console.log('Conexión a MongoDB establecida'))            
    }
    catch(err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

module.exports = connectDB;