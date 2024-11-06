const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'stockcar'
});

const createCarro = (data, callback) => {
    const query = 'INSERT INTO carros (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiuclo, cliente_id) VALUES (?, ?, ?, ?, ?)';
    con.query(query, [data.marca_veiculo, data.modelo_veiculo, data.ano_veiculo, data.fabricacao_veiuclo, data.cliente_id], callback);
};

const readCarros = (callback) => {
    const query = 'SELECT * FROM carros';
    con.query(query, callback);
};

const updateCarro = (data, callback) => {
    const query = 'UPDATE carros SET marca_veiculo = ?, modelo_veiculo = ?, ano_veiculo = ?, fabricacao_veiuclo = ?, cliente_id = ? WHERE carros_id = ?';
    con.query(query, [data.marca_veiculo, data.modelo_veiculo, data.ano_veiculo, data.fabricacao_veiuclo, data.cliente_id, data.carros_id], callback);
};

const deleteCarro = (carros_id, callback) => {
    const query = 'DELETE FROM carros WHERE carros_id = ?';
    con.query(query, [carros_id], callback);
};

module.exports = { createCarro, readCarros, updateCarro, deleteCarro };