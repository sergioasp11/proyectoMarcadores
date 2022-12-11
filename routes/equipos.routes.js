const express = require('express');
const router = express.Router();
const equipoController = require("../controllers/equipoController");

router.get('/', equipoController.all);
router.get('/:id', equipoController.find);
router.post('/', equipoController.store);
router.put('/:id', equipoController.update);
router.delete('/:id', equipoController.delete);

module.exports = router;