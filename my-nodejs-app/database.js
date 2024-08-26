const {
  createPool
 } = require('mysql');
const Connection = require('mysql/lib/Connection');

 const pool = createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database:'your_database',
  connectionLimit: 10
 })

 pool.querry('')

