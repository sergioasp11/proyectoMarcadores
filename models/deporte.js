const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeporteSchema = new Schema({
    nombre: {type: String, required: true},
});

module.exports = mongoose.model('Deporte', DeporteSchema);