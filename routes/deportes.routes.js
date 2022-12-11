const express = require('express');
const router = express.Router();
const deporteController = require("../controllers/deporteController");

router.get('/', deporteController.all);
router.get('/:id', deporteController.find);
router.post('/', deporteController.store);
router.put('/:id', deporteController.update);
router.delete('/:id', deporteController.delete);

module.exports = router;