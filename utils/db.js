// const knex = require('knex')({
//     client: 'mysql2',
//     connection: {
//       host : 'localhost',
//       port : 3306,
//       user : 'root',
//       password : '311299',
//       database : 'valo_chat_clone'
//     }
//   });

//   module.exports = knex;

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "311299",
  DB: "valo_chat_clone",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};