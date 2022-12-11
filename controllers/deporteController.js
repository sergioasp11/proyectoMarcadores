const Deporte = require("../models/deporte");


exports.all = async (req, res) => {
    try {
        const deportes = await Deporte.find();

        res.json({ deportes });

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.find = async (req, res) => {
    try {
        const deporte = await Deporte.findById(req.params.id);
        if(! deporte){
            res.status(400).send("No se encontro el deporte");
        }
        else {
            res.json({ cliente });
        }
      
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};

exports.store = async (req, res) => {
    try {
        const buscarDeporte = await Deporte.findOne({nombre: req.body.nombre});
        console.log(buscarDeporte);
        if(buscarDeporte) {
            res.status(400).send("El deporte ya existe en la base de datos");
        }
        else {
            const deporte = new Deporte(req.body);
            await deporte.save();
            res.json({ deporte });
        }
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};

exports.update = async (req, res) => {
    try {
        const {nombre} = (req.body);
        const datosNuevos = {nombre};
        const deporte = await Deporte.findByIdAndUpdate(req.params.id, datosNuevos);
        if(deporte){
            res.json({ deporte });
        }
        else {
            res.status(400).send("Error en actualizar");
        } 
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};

exports.delete = async (req, res) => {
    try {
        const deporte = await Deporte.findByIdAndRemove(req.params.id);
        if(! deporte){
            res.status(400).send("No se encontro el deporte");
        }
        else {
            res.json({ deporte });
        } 
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};
