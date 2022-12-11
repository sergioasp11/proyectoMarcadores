const usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.all = async (req, res) => {
    try {

        //console.log(req.usuario)

        const usuarios = await usuario.find();

        res.json({ usuarios });

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.find = async (req, res) => {
    try {
        const usuarioBuscar = await usuario.findById(req.params.email);
        if(! usuarioBuscar){
            res.status(400).send("No se encontro el usuario");
        }
        else {
            res.json({ usuarioBuscar });
        }

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.store = async (req, res) => {
    try {
        const { email, password } = req.body;

        const buscarUsuario = await usuario.findOne({email: req.body.email});
        console.log(buscarUsuario);
        if(buscarUsuario) {
            res.status(400).send("El email ya existe en la base de datos");
        }
        else {
            const usuarionew = new usuario(req.body);

            usuarionew.password = await bcryptjs.hash(password, 10);

            await usuarionew.save();
            res.json({ usuarionew });
        }

    } catch (err) {
        console.log(err);
        res.status(400).json(err.errors);
    }
};

exports.delete = async (req, res) => {
    try {
        const usuarioBuscar = await usuario.findByIdAndRemove(req.params.id);
        if(! usuarioBuscar){
            res.status(400).send("No se encontro el usuario");
        }
        else {
            res.json({ usuarioBuscar });
        }

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};