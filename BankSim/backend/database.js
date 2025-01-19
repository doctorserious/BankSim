const mysql=require('mysql2');
const connection=mysql.createPool({ 
    host: 'localhost',
    user: 'bankuser01',
    password: '',
    database: 'atm'
});

module.exports = connection;