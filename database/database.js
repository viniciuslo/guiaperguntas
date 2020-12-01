const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','user','passaword',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;