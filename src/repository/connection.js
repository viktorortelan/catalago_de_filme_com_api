import mysql from 'mysql2/promise';

//criando a conexão com o banco de dados.
let con = await mysql.createConnection({
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PWD,
database: process.env.MYSQL_BD,

//validando se é uma string ou boolean, caso seja numero, numero, ele convertera para number.
typeCast: function (field, next) {
    if(field.type === 'TINY' && field.length === 1) {
        return (field.string() === '1');
    }
    else if(field.type.includes('DECIMAL')) {
        return Number(field.string());
    }
    else {
        return next();
    }
} 

});

console.log('conexão com banco de dados realizada')

export default con;