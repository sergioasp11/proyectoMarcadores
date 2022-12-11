const Equipo = require("../models/equipo");


exports.all = async (req, res) => {
    try {
        const equipos = await Equipo.find();

        res.json({ equipos });

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.find = async (req, res) => {
    try {
        const equipo = await Equipo.findById(req.params.id);
        if(! cliente){
            res.status(400).send("No se encontro el equipo");
        }
        else {
            res.json({ equipo });
        }
      
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};

exports.store = async (req, res) => {
    try {
        const buscarEquipo = await Equipo.findOne({nombre: req.body.nombre});
        console.log(buscarEquipo);
        if(buscarEquipo) {
            res.status(400).send("El equipo ya existe en la base de datos");
        }
        else {
            const equipo = new Equipo(req.body);
            await equipo.save();
            res.json({ equipo });
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
        const equipo = await Equipo.findByIdAndUpdate(req.params.id, datosNuevos);
        if(equipo){
            res.json({ equipo });
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
        const equipo = await Equipo.findByIdAndRemove(req.params.id);
        if(! equipo){
            res.status(400).send("No se encontro el equipo");
        }
        else {
            res.json({ equipo });
        } 
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};