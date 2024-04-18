const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '159357wll',
  port: 3306,
  database: 'AM'
})

module.exports = db