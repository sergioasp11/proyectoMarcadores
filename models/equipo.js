const mongoose = require('mongoose');
const { Schema } = mongoose;

const EquipoSchema = new Schema({
    nombre: {type: String, required: true},
});

module.exports = mongoose.model('Equipo', EquipoSchema);