const express = require('express');
const router = express.Router();
const carroController = require('../controllers/CarroController.js');

router.post('/', carroController.createCarro);
router.get('/', carroController.readCarros);
router.put('/', carroController.updateCarro);
router.delete('/:idCarro', carroController.deleteCarro);

module.exports = router;