import mysql from 'mysql2/promise';

//criando a conexão com o banco de dados.
let con = await mysql.createConnection({
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PWD,
database: process.env.MYSQL_BD 
});

console.log('conexão com banco de dados realizada')

export default con;