const express = require('express');
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const { validarStore } = require('../validators/cliente');
const auth = require('../middleware/auth');

router.get('/', auth, clienteController.all);
router.get('/:id', clienteController.find);
router.post('/', validarStore, clienteController.store);
router.put('/:id', validarStore, clienteController.update);
router.delete('/:id', clienteController.delete);

module.exports = router;