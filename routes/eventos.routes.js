const express = require('express');
const router = express.Router();
const eventoController = require("../controllers/eventoController");

router.get('/', eventoController.all);

module.exports = router;