const Cliente = require("../models/cliente");

exports.all = async (req, res) => {
    try {
        const clientes = await Cliente.find();

        res.json({ clientes });

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.find = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if(! cliente){
            res.status(400).send("No se encontro el cliente");
        }
        else {
            res.json({ cliente });
        }

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.store = async (req, res) => {
    try {
        const buscarCliente = await Cliente.findOne({documento: req.body.documento});
        console.log(buscarCliente);
        if(buscarCliente) {
            res.status(400).send("El documento ya existe en la base de datos");
        }
        else {
            const cliente = new Cliente(req.body);
            await cliente.save();
            res.json({ cliente });
        }

    } catch (err) {
        console.log(err);
        res.status(400).json(err.errors);
    }
};

exports.update = async (req, res) => {
    try {
        
        const { nombre, apellidos, documento, telefono } = req.body;
        const datosNuevos = { nombre, apellidos, documento, telefono };
        
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, datosNuevos); 
        if(cliente) {
            res.json({ msg: "se actualizo correctamente", cliente: cliente });
        }
        else {
            res.status(400).send("Error en actualizar");
        }
    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.delete = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndRemove(req.params.id);
        if(! cliente){
            res.send("No se encontro el cliente");
        }
        else {
            res.json({ msg: 'cliente eliminado', cliente: cliente });
        }

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};