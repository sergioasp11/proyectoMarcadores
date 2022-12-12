const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const auth = require('../middleware/auth');

router.get('/', auth, usuarioController.all);
router.get('/:email', auth, usuarioController.find);
router.post('/', usuarioController.store);
router.delete('/:id', usuarioController.delete);

module.exports = router;