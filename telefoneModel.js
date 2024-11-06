const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'hoteis'
});

const createTelefone = (data, callback) => {
    const query = 'INSERT INTO telefone (cliente_id, numero, tipo) VALUES (?, ?, ?)';
    con.query(query, [data.cliente_id, data.numero, data.tipo], callback);
};

const readTelefones = (callback) => {
    const query = "SELECT * FROM telefone";
    con.query(query, callback);
};

const updateTelefone = (data, callback) => {
    const query = 'UPDATE telefone SET numero = ?, tipo = ? WHERE telefone_id = ?';
    con.query(query, [data.numero, data.tipo, data.telefone_id], callback);
};

const deleteTelefone = (idTelefone, callback) => {
    const query = 'DELETE FROM telefone WHERE telefone_id = ?';
    con.query(query, [idTelefone], callback);
};

module.exports = { createTelefone, readTelefones, updateTelefone, deleteTelefone };



