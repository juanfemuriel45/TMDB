const Sequelize = require("sequelize");


const db = new Sequelize("tmdb", 'juanfelipe', null,{
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports=(db);