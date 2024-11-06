const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'stockcar'
});

const createCliente = (data, calback) =>{
    const query = 'INSERT INTO Clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES(?,?,?,?,?,?)';
    con.query(query,[data.nome, data.cpf, data.email, data.endereco, data.data_nascimento, data.data_cadastro], calback);
};

const readClientes = (calback) => {
    const query = "SELECT * FROM Clientes";
    con.query(query,calback);
};

const updateCliente = (data, calback) => {
    const query = 'UPDATE Clientes SET nome = ?, endereco = ?, email = ?, cpf = ?, data_cadastro = ?, data_nascimento = ? WHERE cliente_id = ?'
    con.query(query,[data.nome, data.endereco, data.email, data.cpf, data.data_cadastro, data.data_nascimento, data.cliente_id], calback)
}

const deleteCliente = (cliente_id, calback) => {
    const query = 'DELETE FROM Clientes WHERE cliente_id = ?';
    con.query(query,[cliente_id], calback);
};
 

module.exports = {createCliente, readClientes , updateCliente, deleteCliente};