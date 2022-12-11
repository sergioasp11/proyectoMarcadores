const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config');

exports.autenticarUsuario = async (req, res) => {

  const { email, password } = req.body;

  try {
    //revisar que sea un usuario registrado
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.json({ token: null, msg: "Datos invalidos" });
    }

    //revisar la password
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if (!passCorrecto) {
      return res.json({ token: null, msg: "Datos invalidos" });
    }

    //Si todo es correcto, crear y firmar el token

    const payload = {
      usuario: { id: usuario.id },
      email: { email: usuario.email },
    };

    jwt.sign(
      payload,
      config.secret_jwt.frase,
      {
        expiresIn: 43200, //1 hora
      },
      (error, token) => {
        if (error) throw error;

        //Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};


exports.decoded = async (token) => {

    return jwt.decode(token, config.secret_jwt.frase)
    
};
  