const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    documento: { type: String, required: true },
    telefono: { type: String, required: true },
});

module.exports = mongoose.model('Cliente', ClienteSchema);