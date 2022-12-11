const Evento = require("../models/evento");


exports.all = async (req, res) => {
    try {
        const eventos = await Evento.find();

        res.json({ eventos });

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.find = async (req, res) => {
    try {
        const evento = await Evento.findById(req.params.id);
        if(! evento){
            res.status(400).send("No se encontro el evento");
        }
        else {
            res.json({ evento });
        }
      
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};

exports.store = async (req, res) => {
    try {
        const buscarEvento = await Evento.findOne({fecha: req.body.fecha});
        console.log(buscarEvento);
        if(buscarEvento) {
            res.status(400).send("El evento ya existe en la base de datos");
        }
        else {
            const evento = new Evento(req.body);
            await evento.save();
            res.json({ evento });
        }
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};

exports.update = async (req, res) => {
    try {
        const {fecha, equipo1, equipo2, marcador_eq1, marcados_eq2, tipo_deporte} = (req.body);
        const datosNuevos = {fecha, equipo1, equipo2, marcador_eq1, marcados_eq2, tipo_deporte};
        const evento = await Evento.findByIdAndUpdate(req.params.id, datosNuevos);
        if(evento){
            res.json({ evento });
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
        const evento = await Evento.findByIdAndRemove(req.params.id);
        if(! evento){
            res.status(400).send("No se encontro el evento");
        }
        else {
            res.json({ evento });
        } 
    } catch(err){
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }    
};