const mysql = require('mysql') // importando mysql

const db = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'pizzariaM'
});

db.connect((err) => {

    if (err) {
        console.error('erro ao conectar ao mysql', err)
    } else {
        console.log('conectando mysql');
    }


});

module.exports = db