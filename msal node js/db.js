const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.sqlUser,
  password: process.env.sqlPassword,
  server: process.env.sqlServer,
  database: process.env.sqlDb
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('DB connection success on ' + process.env.sqlServer);
    return pool;
  })
  .catch(err => console.log('DB connection failed ', err));

module.exports = {
  sql,
  poolPromise
};
