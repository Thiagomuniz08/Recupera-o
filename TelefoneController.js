const TelefoneModel = require('../models/telefoneModel');

const createTelefone = (req,res) => {
    TelefoneModel.createTelefone(req.body, (err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.status(201).json({message: 'Telefone criado com sucesso', result});
        }
    });
};


const readTelefones = (req, res) => {
    TelefoneModel.readTelefones((err,result)=> {
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json(result);

        }
    });
};

const updateTelefone = (req, res) => {
    TelefoneModel.updateTelefone(req.body, (err,result) =>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'Telefone atualizado com sucesso', result});
        }
    });
};

const deleteTelefone = (req, res) => {
    const {idTelefone} = req.params;
    TelefoneModel.deleteTelefone(idTelefone, (err, result) =>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'Telefone removido com sucesso', result});
        }
    });
};

module.exports = {createTelefone, readTelefones, updateTelefone, deleteTelefone};

