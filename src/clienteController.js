const db = require('./db');

const joi = require('joi');

const bcrypt = require('bcrypt');

const clienteSchema = joi.object({

    nome: joi.string().required(),
    endereco: joi.string().required(),
    bairro: joi.string().required(),
    cep: joi.string().required(),
    cpf: joi.string().length(11).required(),
    login: joi.string().required(),
    senha: joi.string().min(6).required()

})

exports.listarCliente = (req, res) => {
    db.query('SELECT * FROM cliente', (err, result) => {
        if (err) {
            console.error('Erro ao buscar cliente:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }
        res.json(result);
    });
};

