const mysql = require('mysql2/promise');
require('dotenv').config();

module.exports = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sewanada',
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true,     // DATE dikirim sebagai 'yyyy-MM-dd'
  decimalNumbers: true,  // DECIMAL dikirim sebagai angka, bukan string
});
