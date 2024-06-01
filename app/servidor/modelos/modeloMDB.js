const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modeloMDB = new Schema({
    Contrato: {
        type: String,
        required: true
    },
    Proyecto: {
        type: String,
        required: true
    },
    Valor: {
        type: Number,
        required: true
    },
    Plazo: {
        type: Number,
        required: true
    },
    Fact: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('modeloMDB', modeloMDB);