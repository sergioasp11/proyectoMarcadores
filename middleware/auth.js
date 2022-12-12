const jwt = require("jsonwebtoken");
const config = require('../config');

module.exports = function (req, res, next) {
  //leer el token del header
  const token = req.header("x-auth-token");

  //revisar si no hay token

  if (!token) {
    return res.status(400).json({ msg: "No hay token, Permiso no válido" });
  }

  //validar token

  try {
    const cifrado = jwt.verify(token, config.secret_jwt.frase)
    req.usuario = cifrado.usuario;

    console.log(cifrado);
    next();

  } catch (error) {
    res.status(400).json({msg:"Token no válido"})
  }
};