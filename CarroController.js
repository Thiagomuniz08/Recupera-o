const carroModel = require('../models/carrosModel');

const createCarro = (req, res) => {
    carroModel.createCarro(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Carro criado com sucesso', result });
        }
    });
};

const readCarros = (req, res) => {
    carroModel.readCarros((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateCarro = (req, res) => {
    carroModel.updateCarro(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Carro atualizado com sucesso', result });
        }
    });
};

const deleteCarro = (req, res) => {
    const { idCarro } = req.params;
    carroModel.deleteCarro(idCarro, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Carro removido com sucesso', result });
        }
    });
};

module.exports = { createCarro, readCarros, updateCarro, deleteCarro }